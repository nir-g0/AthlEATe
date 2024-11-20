import React, { useState } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from 'react-native'
import Slider from '@react-native-community/slider'
import DateTimePicker from '@react-native-community/datetimepicker'
import DefaultPage from '../../components/generics/DefaultPage'
import fonts from '../../styles/fonts'
import compStyles from '../../styles/compStyles'
import Spacer from '../../components/generics/Spacer'
import { LogBox } from 'react-native'

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state'
])
const { width } = Dimensions.get('window')

function TimingScreen ({ navigation, route }: { navigation: any; route: any }) {
  const [budget, setBudget] = useState(3)
  const [mealCount, setMealCount] = useState(3) // Default 3 meals per day
  const [mealTimes, setMealTimes] = useState(
    Array.from({ length: 3 }, () => new Date())
  )
  const { onSave } = route.params
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={fonts.heading2}>How many meals do you want per day?</Text>
        <View style={compStyles.rowWhiteContainer}>
          <TouchableOpacity
            onPress={() => adjustMealCount(-1)}
            style={[compStyles.circle, compStyles.themeGrey]}
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
            style={[compStyles.circle, compStyles.themeGrey]}
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
                paddingHorizontal: width * 0.04,
                borderRadius: width * 0.03
              }}
            >
              <View style={[compStyles.rowWhiteContainer, compStyles.shadow]}>
                <Text style={fonts.greyText}>Meal {index + 1}</Text>
                <TouchableOpacity
                  onPress={() => {
                    if (showPickerIndex === index) {
                      setShowPickerIndex(-1)
                    } else {
                      setShowPickerIndex(index)
                    }
                  }}
                  style={[compStyles.bubble, compStyles.themeBrightGreen]}
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
        <TouchableOpacity
          onPress={() => {
            onSave()
            navigation.pop()
          }}
          style={compStyles.bottomGreenButton}
        >
          <Text style={fonts.whiteTextBold}>Save</Text>
        </TouchableOpacity>
        <Spacer />
      </ScrollView>
    </DefaultPage>
  )
}

export default TimingScreen
