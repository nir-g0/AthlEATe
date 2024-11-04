import { Text, View } from 'react-native'
import DefaultPage from '../../../ConstantStyles/DefaultPage'

function DietScreen ({ navigation }) {
  return (
    <DefaultPage title={'Diet Preferences'} navigation={navigation}>
      <View>
        <Text>Diet</Text>
      </View>
    </DefaultPage>
  )
}
export default DietScreen
