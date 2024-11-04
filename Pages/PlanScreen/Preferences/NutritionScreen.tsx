import { Text, View } from 'react-native'
import DefaultPage from '../../../ConstantStyles/DefaultPage'

function NutritionScreen ({ navigation }) {
  return (
    <DefaultPage title={'Nutrition Goal Preferences'} navigation={navigation}>
      <View>
        <Text>Diet</Text>
      </View>
    </DefaultPage>
  )
}
export default NutritionScreen
