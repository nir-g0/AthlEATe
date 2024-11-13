import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Button,
  Dimensions
} from 'react-native'
import { SafeAreaView } from 'react-native'
import DefaultPage from '../components/generics/DefaultPage'
import AppStyles from '../styles/Styles'
import React, { useEffect, useState } from 'react'
import MealCard from '../components/MealCard'
import fonts from '../styles/fonts'
import compStyles from '../styles/compStyles'
import Spacer from '../components/generics/Spacer'

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

      return (
        <TouchableOpacity
          key={index}
          style={{
            ...compStyles.bubble,
            backgroundColor: index === selectedDay ? '#42D951' : '#FFFFFF',
            borderBottomWidth: index === selectedDay ? 0 : 0.5,
            borderRadius: index === selectedDay ? width * 0.04 : 15
          }}
          onPress={() => setSelectedDay(index)}
        >
          <Text
            style={{
              ...fonts.text,
              color: index === selectedDay ? 'white' : 'black'
            }}
          >
            {`${month.toUpperCase()}`}
          </Text>
          <Text
            style={{
              ...fonts.text,
              color: index === selectedDay ? 'white' : 'black'
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
    <DefaultPage navigation={navigation} title='Meals'>
      <View style={compStyles.rowWhiteContainer}>{handleGenerateDay()}</View>
      <FlatList
        data={meals}
        renderItem={renderMealCard}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity
        style={[compStyles.whiteContainer, compStyles.themeBrightGreen]}
        onPress={generateRandomMeals}
      >
        <Text style={fonts.whiteText}>Regenerate</Text>
      </TouchableOpacity>
      <Spacer />
    </DefaultPage>
  )
}

const styles = StyleSheet.create({
  regenerateButtonContainer: {
    alignItems: 'center',
    marginVertical: height * 0.02
  }
})

export default MealsScreen
