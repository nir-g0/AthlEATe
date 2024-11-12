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

const { width, height } = Dimensions.get('window')

function MealsScreen ({ navigation }: { navigation: any }): React.JSX.Element {
  const [selectedDay, setSelectedDay] = useState(0)
  const [orderedDays, setOrderedDays] = useState<string[]>([])
  const [meals, setMeals] = useState([])

  const daysOfTheWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']

  const mealOptions = [
    { name: 'Chicken Wrap', calories: 420, protein: 25, carbs: 40, fat: 12 },
    {
      name: 'Grilled Chicken Salad',
      calories: 450,
      protein: 30,
      carbs: 20,
      fat: 15,
      selected: false
    },
    {
      name: 'Protein Smoothie',
      calories: 300,
      protein: 20,
      carbs: 35,
      fat: 5,
      selected: false
    },
    {
      name: 'Quinoa Bowl',
      calories: 500,
      protein: 25,
      carbs: 50,
      fat: 10,
      selected: false
    },
    {
      name: 'Spaghetti Bowl',
      calories: 800,
      protein: 25,
      carbs: 50,
      fat: 10,
      selected: false
    },
    {
      name: 'Salmon & Veggies',
      calories: 480,
      protein: 35,
      carbs: 15,
      fat: 18,
      selected: false
    },
    {
      name: 'Oatmeal with Berries',
      calories: 350,
      protein: 10,
      carbs: 60,
      fat: 8,
      selected: false
    }
  ]

  useEffect(() => {
    const today = new Date().getDay()
    const adjustedDays = [
      ...daysOfTheWeek.slice(today === 0 ? 6 : today - 1),
      ...daysOfTheWeek.slice(0, today === 0 ? 6 : today - 1)
    ]
    setOrderedDays(adjustedDays)
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

  const handleGenerateDay = lst => {
    return orderedDays.map((day, index) => (
      <TouchableOpacity
        key={day}
        style={{
          ...styles.dayBubble,
          backgroundColor: index === selectedDay ? '#42D951' : '#F0F0F0'
        }}
        onPress={() => setSelectedDay(index)}
      >
        <Text
          style={{
            fontSize: width * 0.035, // Responsive font size
            color: index === selectedDay ? 'white' : 'black',
            fontWeight: '600',
            fontFamily: 'Menlo'
          }}
        >
          {day}
        </Text>
      </TouchableOpacity>
    ))
  }

  const renderMealCard = ({ item }) => {
    return (
      <MealCard
        title={item.name}
        calories={item.calories}
        protein={item.protein}
        carbs={item.carbs}
        fat={item.fat}
      />
    )
  }

  return (
    <SafeAreaView style={{ ...AppStyles.defaultBackground, flex: 1 }}>
      <DefaultPage navigation={navigation} title='Meals'>
        <View style={styles.bubbleContainer}>
          {handleGenerateDay([0, 1, 2, 3, 4, 5, 6])}
        </View>
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
    borderRadius: width * 0.03, // Responsive border radius
    padding: width * 0.04,
    marginVertical: height * 0.005,
    marginHorizontal: width * 0.01,
    alignItems: 'flex-start'
  },
  mealTitle: {
    fontSize: width * 0.045, // Responsive font size
    fontWeight: '600',
    color: '#333',
    marginBottom: height * 0.005,
    fontFamily: 'Menlo'
  },
  mealDetails: {
    fontSize: width * 0.0325, // Responsive font size
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
    height: width * 0.12,
    width: width * 0.12,
    borderRadius: width * 0.04, // Circle
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
    marginHorizontal: width * 0.01
  },
  regenerateButtonContainer: {
    alignItems: 'center',
    marginVertical: height * 0.02
  }
})

export default MealsScreen
