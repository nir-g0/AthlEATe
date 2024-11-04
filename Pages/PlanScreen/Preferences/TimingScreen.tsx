import { Text, View } from 'react-native'
import DefaultPage from '../../../ConstantStyles/DefaultPage'

function TimingScreen ({ navigation }) {
  return (
    <DefaultPage title={'Timing Preferences'} navigation={navigation}>
      <View>
        <Text>Diet</Text>
      </View>
    </DefaultPage>
  )
}
export default TimingScreen
