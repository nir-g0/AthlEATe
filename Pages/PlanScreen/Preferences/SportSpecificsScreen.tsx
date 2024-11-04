import { Text, View } from 'react-native'
import DefaultPage from '../../../ConstantStyles/DefaultPage'

function SportsScreen ({ navigation }) {
  return (
    <DefaultPage title={'Sport Specific Preferences'} navigation={navigation}>
      <View>
        <Text>Sport Specific Preferences</Text>
      </View>
    </DefaultPage>
  )
}
export default SportsScreen
