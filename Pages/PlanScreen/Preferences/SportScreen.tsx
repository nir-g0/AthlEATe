import React, { useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import DefaultPage from '../../../ConstantStyles/DefaultPage'
import GenericPreference from '../../../ConstantStyles/GenericPreference'
import AppStyles from '../../../ConstantStyles/Styles'

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
      <View style={styles.container}>
        <GenericPreference
          title='What sports do you play?'
          placeholder='Add here...'
          buttonText='Add'
          selectedItems={[]}
          onSelectionChange={item => console.log(item)}
        />

        <GenericPreference
          title='Make your diet align with your position/event, add them here:'
          placeholder='Add here...'
          buttonText='Add'
          selectedItems={[]}
          onSelectionChange={item => console.log(item)}
        />

        <View style={styles.spacer} />

        {/* Season Duration Section */}
        <View>
          <Text style={styles.title}>How long is your season?</Text>
          <View style={styles.dateButtonContainer}>
            <TouchableOpacity
              onPress={() => setShowStartPicker(!showStartPicker)}
              style={styles.dateButton}
            >
              <Text style={styles.dateText}>
                From: {formatMonthYear(startDate)}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setShowEndPicker(!showEndPicker)}
              style={styles.dateButton}
            >
              <Text style={styles.dateText}>
                To: {formatMonthYear(endDate)}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.datePickerContainer}>
            <View style={styles.datePickerWrapper}>
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
            </View>
            <View style={styles.datePickerWrapper}>
              {showEndPicker && (
                <DateTimePicker
                  value={endDate || startDate || today}
                  mode='date'
                  display='default'
                  minimumDate={startDate || today}
                  maximumDate={oneYearFromToday}
                  onChange={(event, date) =>
                    handleDateChange(event, date, 'end')
                  }
                />
              )}
            </View>
          </View>
        </View>

        <View style={styles.spacer} />

        {/* Practice Count Section */}
        <View>
          <Text style={styles.title}>
            How many hours per week do you practice?
          </Text>
          <View style={styles.practiceCountContainer}>
            <TouchableOpacity
              onPress={() => {
                if (practiceCount < 64) setPracticeCount(practiceCount + 1)
              }}
              style={[styles.bubble, styles.grayBubble]}
            >
              <Text style={styles.plusMinusText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bubble}>
              <Text style={styles.plusMinusText}>{practiceCount}</Text>
            </TouchableOpacity>
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

        <View style={styles.spacer} />

        <View style={styles.saveButtonContainer}>
          <TouchableOpacity style={styles.saveButton}>
            <Text style={AppStyles.sectionTitle}>Save</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomSpacer} />
      </View>
    </DefaultPage>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: '5%',
    alignContent: 'center',
    marginTop: '1%',
    flex: 1,
    width: '90%',
    justifyContent: 'center'
  },
  spacer: {
    flex: 0.45
  },
  bottomSpacer: {
    flex: 0.15
  },
  title: {
    color: '#000000',
    fontWeight: '500',
    fontSize: 16,
    fontFamily: 'Menlo',
    alignSelf: 'flex-start'
  },
  dateButtonContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: 10
  },
  dateButton: {
    flex: 1,
    margin: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#42D951',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dateText: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  datePickerContainer: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
  datePickerWrapper: {
    flex: 1,
    alignItems: 'center'
  },
  practiceCountContainer: {
    alignSelf: 'center',
    flexDirection: 'row'
  },
  bubble: {
    width: '25%',
    marginRight: 8,
    marginVertical: 5,
    backgroundColor: '#42D951',
    borderRadius: 18,
    paddingVertical: 8,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  grayBubble: {
    backgroundColor: '#BBBBBB'
  },
  plusMinusText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  saveButtonContainer: {
    flex: 1
  },
  saveButton: {
    backgroundColor: '#42D951',
    borderRadius: 10,
    width: '100%',
    height: '100%',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    paddingHorizontal: 30,
    margin: 5
  }
})

export default SportScreen
