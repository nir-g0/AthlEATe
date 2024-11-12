import React, { useState } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions
} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import DefaultPage from '../../../ConstantStyles/DefaultPage'
import GenericPreference from '../../../ConstantStyles/GenericPreference'
import AppStyles from '../../../ConstantStyles/Styles'

const { width, height } = Dimensions.get('window')

function SportScreen ({ navigation }) {
  const [practiceCount, setPracticeCount] = useState(0)
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [showStartPicker, setShowStartPicker] = useState(false)
  const [showEndPicker, setShowEndPicker] = useState(false)

  const today = new Date()
  const oneYearAgo = new Date(
    today.getFullYear() - 1,
    today.getMonth(),
    today.getDate()
  )
  const oneYearFromToday = new Date(
    today.getFullYear() + 1,
    today.getMonth(),
    today.getDate()
  )

  const handleDateChange = (event, selectedDate, type) => {
    if (type === 'start') {
      setShowStartPicker(false)
      if (selectedDate) {
        setStartDate(selectedDate)
        if (endDate && selectedDate > endDate) setEndDate(null)
      }
    } else {
      setShowEndPicker(false)
      if (selectedDate && (!startDate || selectedDate >= startDate)) {
        setEndDate(selectedDate)
      }
    }
  }

  const formatMonthYear = date => {
    if (!date) return 'Select Date'
    const options = { year: 'numeric', month: 'long' }
    return date.toLocaleDateString(undefined, options)
  }

  return (
    <DefaultPage title='Sport Specifics' navigation={navigation}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.section}>
          <GenericPreference
            title='What sports do you play?'
            placeholder='Add here...'
            buttonText='Add'
            selectedItems={[]}
            onSelectionChange={item => console.log(item)}
          />
        </View>

        <View style={styles.section}>
          <GenericPreference
            title='Add your event(s) or position(s):'
            placeholder='Add here...'
            buttonText='Add'
            selectedItems={[]}
            onSelectionChange={item => console.log(item)}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>How long is your season?</Text>
          <View style={styles.dateButtonContainer}>
            <TouchableOpacity
              onPress={() => {
                showEndPicker ? setShowEndPicker(false) : null
                setShowStartPicker(!showStartPicker)
              }}
              style={styles.dateButton}
            >
              <Text style={styles.dateText}>From:</Text>
              <Text style={styles.dateText}>{formatMonthYear(startDate)}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                showStartPicker ? setShowStartPicker(false) : null
                setShowEndPicker(!showEndPicker)
              }}
              style={styles.dateButton}
            >
              <Text style={styles.dateText}>To:</Text>
              <Text style={styles.dateText}>{formatMonthYear(endDate)}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.datePickerContainer}>
            {showStartPicker && (
              <DateTimePicker
                value={startDate || today}
                mode='date'
                display='default'
                minimumDate={oneYearAgo}
                maximumDate={oneYearFromToday}
                onChange={(event, date) =>
                  handleDateChange(event, date, 'start')
                }
              />
            )}
            {showEndPicker && (
              <DateTimePicker
                value={endDate || startDate || today}
                mode='date'
                display='default'
                minimumDate={startDate || today}
                maximumDate={oneYearFromToday}
                onChange={(event, date) => handleDateChange(event, date, 'end')}
              />
            )}
          </View>
        </View>

        {/* Practice Count Section */}
        <View style={styles.section}>
          <Text style={styles.title}>
            How many hours per week do you practice?
          </Text>
          <View style={styles.practiceCountContainer}>
            <TouchableOpacity
              onPress={() => {
                if (practiceCount < 40) setPracticeCount(practiceCount + 1)
              }}
              style={[styles.bubble, styles.grayBubble]}
            >
              <Text style={styles.plusMinusText}>+</Text>
            </TouchableOpacity>
            <View style={[styles.bubble, styles.countBubble]}>
              <Text style={styles.plusMinusText}>{practiceCount}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                if (practiceCount > 0) setPracticeCount(practiceCount - 1)
              }}
              style={[styles.bubble, styles.grayBubble]}
            >
              <Text style={styles.plusMinusText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Save Button */}
        <View style={styles.saveButtonContainer}>
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </DefaultPage>
  )
}

const shadow = {
  shadowColor: '#000',
  shadowOpacity: 0.25,
  shadowRadius: 4,
  shadowOffset: { width: 0, height: 2 }
}
const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: width * 0.02,
    paddingVertical: height * 0.03
  },
  section: {
    marginBottom: height * 0.03
  },
  title: {
    fontSize: width * 0.04,
    color: '#333',
    fontWeight: '600',
    fontFamily: 'Menlo',
    alignSelf: 'flex-start',
    marginBottom: height * 0.02
  },
  dateButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: height * 0.01,
    ...shadow
  },
  dateButton: {
    flex: 1,
    marginHorizontal: width * 0.015,
    paddingVertical: height * 0.015,
    backgroundColor: '#42D951',
    borderRadius: width * 0.03,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dateText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: width * 0.04
  },
  datePickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: height * 0.01
  },
  practiceCountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bubble: {
    width: width * 0.15,
    height: width * 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width * 0.075,
    marginHorizontal: width * 0.015,
    ...shadow
  },
  grayBubble: {
    backgroundColor: '#BBBBBB'
  },
  countBubble: {
    backgroundColor: '#42D951'
  },
  plusMinusText: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    color: '#FFF'
  },
  saveButtonContainer: {
    alignItems: 'center',
    marginTop: height * 0.03
  },
  saveButton: {
    backgroundColor: '#42D951',
    borderRadius: width * 0.05,
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.4,
    alignItems: 'center',
    ...shadow
  },
  saveButtonText: {
    color: '#FFF',
    fontSize: width * 0.045,
    fontWeight: '700',
    fontFamily: 'Menlo'
  }
})

export default SportScreen
