import React, { useState } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
  Dimensions
} from 'react-native'
import Slider from '@react-native-community/slider'
import DateTimePicker from '@react-native-community/datetimepicker'
import DefaultPage from '../../components/generics/DefaultPage'
import AppStyles from '../../styles/Styles'
import fonts from '../../styles/fonts'
import compStyles from '../../styles/compStyles'
import Spacer from '../../components/generics/Spacer'

const { width, height } = Dimensions.get('window')

function TimingScreen ({ navigation }) {
  const [budget, setBudget] = useState(3)
  const [mealCount, setMealCount] = useState(3) // Default 3 meals per day
  const [mealTimes, setMealTimes] = useState(
    Array.from({ length: 3 }, () => new Date())
  ) // Initialize with current times
  const [showPickerIndex, setShowPickerIndex] = useState(-1) // Track which meal time picker is open

  const handleTimeChange = (event, selectedTime, index) => {
    if (event.type === 'set' && selectedTime) {
      const updatedTimes = [...mealTimes]
      updatedTimes[index] = selectedTime
      setMealTimes(updatedTimes)
    }
  }

  const formatTime = time => {
    return time
      ? time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      : 'Set Time'
  }

  const adjustMealCount = change => {
    const newCount = mealCount + change
    if (newCount >= 1 && newCount <= 8) {
      // Limit to 1-8 meals per day
      setMealCount(newCount)
      setMealTimes(prevTimes => {
        const updatedTimes = [...prevTimes]
        if (newCount > prevTimes.length) {
          for (let i = prevTimes.length; i < newCount; i++) {
            updatedTimes.push(new Date())
          }
        } else {
          updatedTimes.length = newCount
        }
        return updatedTimes
      })
    }
  }

  return (
    <DefaultPage title='Meal Timing' navigation={navigation}>
      <ScrollView>
        <Text style={fonts.heading2}>How many meals do you want per day?</Text>
        <View style={{ ...compStyles.whiteContainer, flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => adjustMealCount(-1)}
            style={[compStyles.circle, styles.grayBubble]}
          >
            <Text style={fonts.whiteTextBold}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[compStyles.circle, compStyles.themeBrightGreen]}
          >
            <Text style={fonts.whiteTextBold}>{mealCount}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => adjustMealCount(1)}
            style={[compStyles.circle, styles.grayBubble]}
          >
            <Text style={fonts.whiteTextBold}>+</Text>
          </TouchableOpacity>
        </View>
        <Spacer />
        <Text style={fonts.heading2}>Set the time for each meal:</Text>
        <View>
          {mealTimes.map((time, index) => (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: width * 0.04,
                borderRadius: width * 0.03
              }}
            >
              <View style={styles.mealTimeContainer}>
                <Text style={fonts.greyText}>Meal {index + 1}</Text>
                <TouchableOpacity
                  onPress={() => {
                    if (showPickerIndex === index) {
                      setShowPickerIndex(-1)
                    } else {
                      setShowPickerIndex(index)
                    }
                  }}
                  style={styles.timeButton}
                >
                  <Text style={fonts.whiteText}>{formatTime(time)}</Text>
                </TouchableOpacity>

                {showPickerIndex === index && (
                  <DateTimePicker
                    value={time} // Use the specific time for each meal
                    mode='time'
                    display='default'
                    onChange={(event, selectedTime) =>
                      handleTimeChange(event, selectedTime, index)
                    }
                  />
                )}
              </View>
            </View>
          ))}
        </View>
        <Spacer />
        <Text style={fonts.heading2}>
          Set Your Budget: ${budget.toFixed(2)} per meal
        </Text>
        <View style={compStyles.whiteContainer}>
          <Slider
            style={{ width: 200, height: 40 }}
            minimumValue={3.5}
            maximumValue={16}
            step={0.5}
            value={budget}
            onValueChange={value => setBudget(value)}
            minimumTrackTintColor='#CCCCCC'
            maximumTrackTintColor='#DDDDDC'
            thumbTintColor='#42D951'
          />
        </View>
        <Spacer />
        <TouchableOpacity style={compStyles.bottomGreenButton}>
          <Text style={fonts.whiteTextBold}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </DefaultPage>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: width * 0.04,
    fontWeight: '500',
    color: '#333',
    marginBottom: height * 0.012,
    fontFamily: 'Menlo',
    alignSelf: 'flex-start'
  },
  mealCountContainer: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
  bubble: {
    width: 50,
    marginHorizontal: 5,
    backgroundColor: '#42D951',
    borderRadius: 18,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 }
  },
  grayBubble: {
    backgroundColor: '#BBBBBB'
  },
  plusMinusText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  mealTimeContainer: {
    ...compStyles.whiteContainer,
    flexDirection: 'row'
  },
  mealLabel: {
    fontSize: width * 0.04,
    color: '#333',
    fontFamily: 'Menlo',
    flex: 1
  },
  timeButton: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: '#42D951',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5
  },
  timeText: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  saveButtonContainer: {
    minWidth: '100%',
    marginVertical: 20,
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 }
  },
  saveButton: {
    backgroundColor: '#42D951',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default TimingScreen
