import React, { useState } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native'
import Slider from '@react-native-community/slider'
import DateTimePicker from '@react-native-community/datetimepicker'
import DefaultPage from '../../../ConstantStyles/DefaultPage'
import AppStyles from '../../../ConstantStyles/Styles'

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
      <View style={styles.container}>
        <Text style={styles.title}>How many meals do you have per day?</Text>
        <View style={styles.mealCountContainer}>
          <TouchableOpacity
            onPress={() => adjustMealCount(-1)}
            style={[styles.bubble, styles.grayBubble]}
          >
            <Text style={styles.plusMinusText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bubble}>
            <Text style={styles.plusMinusText}>{mealCount}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => adjustMealCount(1)}
            style={[styles.bubble, styles.grayBubble]}
          >
            <Text style={styles.plusMinusText}>+</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Set time for each meal:</Text>
        {mealTimes.map((time, index) => (
          <View key={index} style={styles.mealTimeContainer}>
            <Text style={styles.mealLabel}>Meal {index + 1}</Text>
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
              <Text style={styles.timeText}>{formatTime(time)}</Text>
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
        ))}
        <View
          style={{
            marginVertical: 20,
            alignItems: 'center',
            width: '90%',
            alignSelf: 'center'
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: '#000',
              marginBottom: 5
            }}
          >
            Set Your Budget: ${budget.toFixed(2)} per meal
          </Text>
          <View style={{ minHeight: '30%' }}>
            <Slider
              style={{ width: '100%' }}
              minimumValue={3.5}
              maximumValue={30}
              step={0.5}
              value={budget}
              onValueChange={value => setBudget(value)}
              minimumTrackTintColor='red'
              maximumTrackTintColor='blue'
              thumbTintColor='#42D951'
            />
          </View>
        </View>
        <View style={styles.saveButtonContainer}>
          <TouchableOpacity style={styles.saveButton}>
            <Text style={AppStyles.sectionTitle}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </DefaultPage>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: '5%',
    marginTop: '1%',
    width: '90%',
    alignItems: 'center'
  },
  title: {
    color: '#000000',
    fontWeight: '500',
    fontSize: 16,
    fontFamily: 'Menlo',
    alignSelf: 'flex-start',
    marginVertical: 10
  },
  mealCountContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: 15
  },
  bubble: {
    width: 50,
    marginHorizontal: 5,
    backgroundColor: '#42D951',
    borderRadius: 18,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center'
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
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    width: '100%'
  },
  mealLabel: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
    fontWeight: '500'
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
    marginVertical: 20
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
