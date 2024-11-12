import { useState } from 'react'
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
const { width, height } = Dimensions.get('window')

const MealCard = ({ title, calories, protein, carbs, fat }) => {
  let [favorited, setFavorited] = useState(false)
  return (
    <TouchableOpacity style={styles.mealCard}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <Text style={styles.mealTitle}>{title}</Text>
        </View>
        <TouchableOpacity
          style={{
            shadowColor: '#000',
            shadowOpacity: 0.6,
            shadowRadius: 1,
            shadowOffset: { width: 0, height: 0 }
          }}
          onPress={() => {
            setFavorited(!favorited)
          }}
        >
          <Image
            style={{ height: width * 0.065, width: width * 0.065 }}
            source={
              favorited
                ? require('../../assets/icons/start-filled.png')
                : require('../../assets/icons/start-unfilled.png')
            }
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.mealDetails}>Calories: {calories}</Text>
      <Text style={styles.mealDetails}>
        Protein: {protein}g | Carbs: {carbs}g | Fat: {fat}g
      </Text>
    </TouchableOpacity>
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
    color: '#000000',
    marginBottom: height * 0.005,
    fontFamily: 'Menlo'
  },
  mealDetails: {
    fontSize: width * 0.0325, // Responsive font size
    color: '#666',
    fontFamily: 'Menlo'
  }
})

export default MealCard
