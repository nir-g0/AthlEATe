import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Dimensions
} from 'react-native'
import { SafeAreaView } from 'react-native'
import DefaultPage from '../components/generics/DefaultPage'
import MealCard from '../components/MealScreenComponents/MealCard'
import Spacer from '../components/generics/Spacer'
import fonts from '../styles/fonts'
import compStyles from '../styles/compStyles'
import AsyncStorage from '@react-native-async-storage/async-storage'

const { width, height } = Dimensions.get('window')

function MealsScreen ({ route, navigation }) {
  const [selectedDay, setSelectedDay] = useState(0)
  const [orderedDates, setOrderedDates] = useState([])
  const [mealsByDay, setMealsByDay] = useState({})
  const mealOptions = {
    0: [
      {
        meal: 'Breakfast',
        time: '08:00 AM',
        dish: 'Avocado and Bacon Omelette',
        ingredients: [
          { item: 'Eggs', quantity: '3 large' },
          { item: 'Avocado', quantity: '1/2 medium' },
          { item: 'Bacon', quantity: '2 slices' },
          { item: 'Cheddar cheese', quantity: '30g' }
        ],
        macros: {
          calories: 450,
          protein: 30,
          carbs: 5,
          fats: 35
        },
        hydration: '250 ml'
      },
      {
        meal: 'Lunch',
        time: '12:00 PM',
        dish: 'Zucchini Noodles with Pesto Chicken',
        ingredients: [
          { item: 'Zucchini', quantity: '2 medium' },
          { item: 'Pesto sauce', quantity: '50g' },
          { item: 'Chicken breast', quantity: '150g' },
          { item: 'Parmesan cheese', quantity: '20g' }
        ],
        macros: {
          calories: 400,
          protein: 40,
          carbs: 7,
          fats: 25
        },
        hydration: '300 ml'
      }
    ],
    1: [
      {
        meal: 'Dinner',
        time: '06:00 PM',
        dish: 'Grilled Salmon with Asparagus',
        ingredients: [
          { item: 'Salmon fillet', quantity: '200g' },
          { item: 'Asparagus', quantity: '100g' },
          { item: 'Olive oil', quantity: '1 tbsp' },
          { item: 'Lemon', quantity: '1 wedge' }
        ],
        macros: {
          calories: 500,
          protein: 45,
          carbs: 5,
          fats: 36
        },
        hydration: '250 ml'
      }
    ]
    // Add more days here
  }

  useEffect(() => {
    const today = new Date()
    const dates = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      return date
    })
    setOrderedDates(dates)

    // Use passed meals or generate default meals
    const { meals: routeMeals } = route.params || {}
    const onLoad = async () => {
      const exists = await AsyncStorage.getItem('meals')
      if (routeMeals) {
        const t = JSON.parse(`{${routeMeals}}`)
        setMealsByDay(t)
      } else if (exists) {
        setMealsByDay(JSON.parse(`{${exists}}`))
      } else {
        setMealsByDay(mealOptions)
      }
    }
    onLoad()
  }, [route])

  const handleGenerateDay = () =>
    orderedDates.map((date, index) => {
      const day = date.getDate()
      const month = date.toLocaleString('default', { month: 'short' })

      return (
        <TouchableOpacity
          key={index}
          style={{
            ...compStyles.bubble,
            backgroundColor:
              index === selectedDay
                ? compStyles.themeBrightGreen.color
                : compStyles.themeWhite.color,
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

  const renderMealCard = ({ item }) => <MealCard object={item} />

  const currentMeals = mealsByDay[selectedDay + 1] || []

  return (
    <DefaultPage navigation={navigation} title='Meals'>
      <View style={[compStyles.rowWhiteContainer, compStyles.themeWhite]}>
        {handleGenerateDay()}
      </View>
      <FlatList
        data={currentMeals}
        renderItem={renderMealCard}
        keyExtractor={(item, index) => `${selectedDay}-${index}`}
      />
      <TouchableOpacity
        style={[compStyles.whiteContainer, compStyles.themeBrightGreen]}
        onPress={() => {
          // Regenerate meals logic here
        }}
      >
        <Text style={fonts.whiteText}>Regenerate</Text>
      </TouchableOpacity>
      <Spacer />
    </DefaultPage>
  )
}

export default MealsScreen
