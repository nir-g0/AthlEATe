import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Button,
  Dimensions,
  Image
} from 'react-native'
import { SafeAreaView } from 'react-native'
import DefaultPage from '../../ConstantStyles/DefaultPage'
import AppStyles from '../../ConstantStyles/Styles'
import React, { useEffect, useState } from 'react'
import MealCard from './MealCard'
import { ScrollView } from 'react-native-gesture-handler'

const { width, height } = Dimensions.get('window')

function MealsScreen ({ navigation }: { navigation: any }): React.JSX.Element {
  const [selectedDay, setSelectedDay] = useState(0)
  const [orderedDates, setOrderedDates] = useState<Date[]>([])
  const [meals, setMeals] = useState([])

  const mealOptions = [
    { name: 'Chicken Wrap', calories: 420, protein: 25, carbs: 40, fat: 12 },
    {
      name: 'Grilled Chicken Salad',
      calories: 450,
      protein: 30,
      carbs: 20,
      fat: 15
    },
    { name: 'Protein Smoothie', calories: 300, protein: 20, carbs: 35, fat: 5 },
    { name: 'Quinoa Bowl', calories: 500, protein: 25, carbs: 50, fat: 10 },
    { name: 'Spaghetti Bowl', calories: 800, protein: 25, carbs: 50, fat: 10 },
    {
      name: 'Salmon & Veggies',
      calories: 480,
      protein: 35,
      carbs: 15,
      fat: 18
    },
    {
      name: 'Oatmeal with Berries',
      calories: 350,
      protein: 10,
      carbs: 60,
      fat: 8
    }
  ]

  useEffect(() => {
    const today = new Date()
    const dates = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      return date
    })
    setOrderedDates(dates)
    generateRandomMeals()
  }, [])

  const generateRandomMeals = () => {
    const randomMeals = []
    for (let i = 0; i < 3; i++) {
      const randomMeal =
        mealOptions[Math.floor(Math.random() * mealOptions.length)]
      randomMeals.push({ ...randomMeal, id: `${i}-${randomMeal.name}` })
    }
    setMeals(randomMeals)
  }

  useEffect(() => {
    generateRandomMeals()
  }, [selectedDay])

  const handleGenerateDay = () => {
    return orderedDates.map((date, index) => {
      const day = date.getDate()
      const month = date.toLocaleString('default', { month: 'short' })
      const year = date.getFullYear()

      return (
        <TouchableOpacity
          key={index}
          style={{
            ...styles.dayBubble,
            backgroundColor: index === selectedDay ? '#42D951' : '#FFFFFF'
          }}
          onPress={() => setSelectedDay(index)}
        >
          <Text
            style={{
              fontSize: width * 0.035,
              color: index === selectedDay ? 'white' : 'black',
              fontFamily: 'Menlo'
            }}
          >
            {`${month}`}
          </Text>
          <Text
            style={{
              fontSize: width * 0.035,
              color: index === selectedDay ? 'white' : 'black',
              fontFamily: 'Menlo'
            }}
          >
            {`${day}`}
          </Text>
        </TouchableOpacity>
      )
    })
  }

  const renderMealCard = ({ item }) => (
    <MealCard
      title={item.name}
      calories={item.calories}
      protein={item.protein}
      carbs={item.carbs}
      fat={item.fat}
    />
  )

  return (
    <SafeAreaView style={{ ...AppStyles.defaultBackground, flex: 1 }}>
      <DefaultPage navigation={navigation} title='Meals'>
        <View style={styles.bubbleContainer}>{handleGenerateDay()}</View>
        <FlatList
          data={meals}
          renderItem={renderMealCard}
          keyExtractor={item => item.id}
          style={{ width: '95%' }}
          contentContainerStyle={{ paddingHorizontal: width * 0.04 }}
        />
        <View style={styles.regenerateButtonContainer}>
          <Button
            title={'Regenerate'}
            onPress={generateRandomMeals}
            color='#007AFF'
          />
        </View>
      </DefaultPage>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mealCard: {
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
    borderRadius: width * 0.03,
    padding: width * 0.04,
    marginVertical: height * 0.005,
    marginHorizontal: width * 0.01,
    alignItems: 'flex-start'
  },
  mealTitle: {
    fontSize: width * 0.045,
    fontWeight: '600',
    color: '#333',
    marginBottom: height * 0.005,
    fontFamily: 'Menlo'
  },
  mealDetails: {
    fontSize: width * 0.0325,
    color: '#666',
    fontFamily: 'Menlo'
  },
  bubbleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.05
  },
  dayBubble: {
    height: width * 0.13,
    width: width * 0.13,
    borderRadius: width * 0.04,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
    marginHorizontal: width * 0.005
  },
  regenerateButtonContainer: {
    alignItems: 'center',
    marginVertical: height * 0.02
  }
})

export default MealsScreen
