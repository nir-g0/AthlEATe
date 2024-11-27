import { View, Text } from 'react-native'
import compStyles from '../../styles/compStyles'
import fonts from '../../styles/fonts'

function DailyInsights () {
  const calories = 1110
  const caloriesGoal = 2000
  const hydration = 40
  return (
    <View>
      <Text style={fonts.heading1}>Daily insights</Text>
      <View>
        <View
          style={[
            compStyles.bubble,
            compStyles.themeWhite,
            compStyles.shadow,
            { marginVertical: '1%', marginHorizontal: '2.5%' }
          ]}
        >
          <Text
            style={[
              fonts.whiteTextBold,
              { color: compStyles.themeBrightGreen.color }
            ]}
          >
            Calories Eaten:
          </Text>
          <Text
            style={[fonts.whiteText, { color: compStyles.themeGrey.color }]}
          >
            {calories} Cal
          </Text>
        </View>
      </View>
      <View>
        <View
          style={[
            compStyles.bubble,
            compStyles.themeWhite,
            compStyles.shadow,
            { marginVertical: '1%', marginHorizontal: '2.5%' }
          ]}
        >
          <Text
            style={[
              fonts.whiteTextBold,
              { color: compStyles.themeBrightGreen.color }
            ]}
          >
            Water Drank:
          </Text>
          <Text
            style={[fonts.whiteText, { color: compStyles.themeGrey.color }]}
          >
            {hydration} Oz
          </Text>
        </View>
      </View>
    </View>
  )
}

export default DailyInsights
