import { Text, View } from 'react-native'
import DefaultPage from '../../../ConstantStyles/DefaultPage'

function BudgetScreen ({ navigation }) {
  return (
    <DefaultPage title={'Budget Preferences'} navigation={navigation}>
      <View>
        <Text>BudgetScreen</Text>
      </View>
    </DefaultPage>
  )
}
export default BudgetScreen
