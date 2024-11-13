import { useState } from 'react'
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import fonts from '../styles/fonts'
import compStyles from '../styles/compStyles'
const { width, height } = Dimensions.get('window')

const MealCard = ({ title, calories, protein, carbs, fat }) => {
  let [favorited, setFavorited] = useState(false)
  return (
    <TouchableOpacity style={compStyles.whiteContainer}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <Text style={fonts.heading1}>{title}</Text>
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
      <Text style={fonts.greyTextSmall}>Calories: {calories}</Text>
      <Text style={fonts.greyTextSmall}>
        Protein: {protein}g | Carbs: {carbs}g | Fat: {fat}g
      </Text>
    </TouchableOpacity>
  )
}
export default MealCard
