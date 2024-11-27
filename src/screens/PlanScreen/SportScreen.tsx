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
import DefaultPage from '../../components/generics/DefaultPage'
import GenericPreference from '../../components/generics/GenericPreference'
import Graph from '../../components/Graph'
import fonts from '../../styles/fonts'
import compStyles from '../../styles/compStyles'
import Spacer from '../../components/generics/Spacer'
import { LogBox } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state'
])
const { width } = Dimensions.get('window')

function SportScreen ({ navigation, route }: { navigation: any; route: any }) {
  const [practiceCount, setPracticeCount] = useState(0)
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date(new Date().getMonth() + 1))
  const [showGraph, setShowGraph] = useState(false)
  const [sports, setSports] = useState<string[]>([])
  const [position, setPosition] = useState<string[]>([])

  const monthInd = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December'
  }
  const monthMap = {
    January: ['- Jan', 1],
    February: ['- Feb', 2],
    March: ['- Mar', 3],
    April: ['- Apr', 4],
    May: ['- May', 5],
    June: ['- Jun', 6],
    July: ['- Jul', 7],
    August: ['- Aug', 8],
    September: ['- Sep', 9],
    October: ['- Oct', 10],
    November: ['- Nov', 11],
    December: ['- Dec', 12]
  }

  const [data, setData] = useState([
    { idx: 0, value: 3, label: 'Jan', nonShorted: 'January' }
  ])
  const { onSave } = route.params
  const saveData = async () => {
    try {
      let dataObj = {
        practiceCount: practiceCount,
        startDate: startDate,
        endDate: endDate,
        sports: sports,
        position: position
      }
      let dataObjString = JSON.stringify(dataObj)
      await AsyncStorage.setItem('sportsPrefs', dataObjString)
    } catch (e) {
      console.error('Failed to save the data to the storage', e)
    }
  }
  const today = new Date()

  const oneYearAgo = new Date(
    today.getFullYear() - 1,
    today.getMonth(),
    today.getDate()
  )

  const oneMonthFromDate = new Date(
    startDate.getFullYear(),
    startDate.getMonth() + 1,
    startDate.getDate()
  )
  const oneYearFromDate = new Date(
    today.getFullYear() + 1,
    today.getMonth() - 1,
    today.getDate()
  )

  const adjustData = () => {
    const initial = []
    let index = 1
    let startInd = monthMap[formatMonth(startDate)][1] - 1 // 0-based index
    const endInd = monthMap[formatMonth(endDate)][1] - 1 // 0-based index
    const totalMonths = 12

    // To ensure the loop runs at least once
    let currentInd = startInd

    do {
      initial.push({
        idx: index - 1,
        value: 5,
        label: monthMap[monthInd[(currentInd % totalMonths) + 1]][0],
        nonShorted: monthInd[(currentInd % totalMonths) + 1]
      })
      currentInd += 1
      index += 1
    } while (currentInd % totalMonths !== (endInd + 1) % totalMonths)

    setData(initial)
  }

  const handleDateChange = (event, selectedDate, type) => {
    if (type === 'start') {
      if (selectedDate) {
        setStartDate(selectedDate)
        if (endDate && selectedDate > endDate) setEndDate(null)
      }
    } else {
      if (selectedDate && (!startDate || selectedDate >= startDate)) {
        setEndDate(selectedDate)
      }
    }
    if (endDate) {
      adjustData()
      setShowGraph(true)
    }
  }

  const formatMonth = date => {
    if (!date) return 'Select Date'
    const options = { month: 'long' }
    return date.toLocaleDateString(undefined, options).toString()
  }

  return (
    <DefaultPage title='Sport Specifics' navigation={navigation}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <GenericPreference
          title='What sports do you play?'
          placeholder='Add here...'
          buttonText='Add'
          selectedItems={[]}
          onSelectionChange={data => setSports([...data])}
        />
        <Spacer />
        <GenericPreference
          title='Add your event(s) or position(s):'
          placeholder='Add here...'
          buttonText='Add'
          selectedItems={[]}
          onSelectionChange={data => setPosition([...data])}
        />
        <Spacer />
        <Text style={fonts.heading2}>How long is your season?</Text>

        <View
          style={[
            compStyles.rowWhiteContainer,
            compStyles.shadow,
            { width: '90%' }
          ]}
        >
          <Text style={[fonts.whiteText, { color: 'black', flex: 2 }]}>
            From:
          </Text>
          <DateTimePicker
            value={startDate || today}
            mode='date'
            display='default'
            minimumDate={oneYearAgo}
            maximumDate={oneYearFromDate}
            onChange={(event, date) => handleDateChange(event, date, 'start')}
          />
        </View>
        <View
          style={[
            compStyles.rowWhiteContainer,
            compStyles.shadow,
            { width: '90%' }
          ]}
        >
          <Text style={[fonts.whiteText, { color: 'black', flex: 1 }]}>
            To:
          </Text>
          <DateTimePicker
            value={endDate || startDate || today}
            mode='date'
            display='default'
            minimumDate={oneMonthFromDate || today}
            maximumDate={oneYearFromDate}
            onChange={(event, date) => handleDateChange(event, date, 'end')}
          />
        </View>
        {showGraph ? (
          <>
            <Text style={fonts.heading2}>Adjust season intensity:</Text>
            <Graph data={data} setData={setData} />
            <Text style={fonts.greyTextSmall}>
              (tap the points to change intensity level)
            </Text>
          </>
        ) : (
          <></>
        )}
        <Text style={fonts.heading2}>
          How many hours per week do you practice?
        </Text>
        <View style={styles.practiceCountContainer}>
          <TouchableOpacity
            onPress={() => {
              if (practiceCount < 40) setPracticeCount(practiceCount + 1)
            }}
            style={[compStyles.circle, compStyles.themeBrightGreen]}
          >
            <Text style={fonts.whiteTextBold}>+</Text>
          </TouchableOpacity>
          <View style={[compStyles.bubble]}>
            <Text style={[fonts.whiteTextBold, { color: '#000' }]}>
              {practiceCount}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              if (practiceCount > 0) setPracticeCount(practiceCount - 1)
            }}
            style={[compStyles.circle, compStyles.themeBrightGreen]}
          >
            <Text style={fonts.whiteTextBold}>-</Text>
          </TouchableOpacity>
        </View>
        <Spacer />
        <TouchableOpacity
          onPress={() => {
            saveData()
            onSave()
            navigation.pop()
          }}
          style={[compStyles.longButton, compStyles.themeBrightGreen]}
        >
          <Text style={fonts.whiteTextBold}>Save</Text>
        </TouchableOpacity>
        <Spacer />
      </ScrollView>
    </DefaultPage>
  )
}

const styles = StyleSheet.create({
  dateButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  dateButton: {
    flex: 1,
    marginHorizontal: width * 0.015,
    ...compStyles.bubble,
    ...compStyles.themeBrightGreen
  },
  datePickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  practiceCountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  grayBubble: {
    backgroundColor: '#BBBBBB'
  }
})

export default SportScreen
