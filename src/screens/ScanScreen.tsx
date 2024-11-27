import { SafeAreaView } from 'react-native'
import DefaultPage from '../components/generics/DefaultPage'
import AppStyles from '../styles/Styles'

function ScanScreen ({ navigation }: { navigation: any }): React.JSX.Element {
  return (
    <DefaultPage
      navigation={navigation}
      title='Scan'
      children={undefined}
    ></DefaultPage>
  )
}

export default ScanScreen
