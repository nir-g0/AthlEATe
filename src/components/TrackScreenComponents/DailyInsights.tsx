import { View, Text } from 'react-native'
import compStyles from '../../styles/compStyles'
import fonts from '../../styles/fonts'

function DailyInsights () {
  const calories = 1110
  const caloriesGoal = 2000
  const hydration = 40
  return (
    <View>
      <Text style={fonts.heading1}>🌟Daily insights🌟</Text>
      <View>
        <View
          style={[
            compStyles.bubble,
            compStyles.themeBrightGreen,
            compStyles.shadow,
            { margin: '1%' }
          ]}
        >
          <Text style={[fonts.whiteTextBold]}>Calories Eaten:</Text>
          <Text style={fonts.whiteText}>{calories} Cal</Text>
        </View>
      </View>
      <View>
        <View
          style={[
            compStyles.bubble,
            compStyles.themeBrightGreen,
            compStyles.shadow,
            { margin: '1%' }
          ]}
        >
          <Text style={fonts.whiteTextBold}>Water Drank:</Text>
          <Text style={fonts.whiteText}>{hydration} Oz</Text>
        </View>
      </View>
    </View>
  )
}

export default DailyInsights
