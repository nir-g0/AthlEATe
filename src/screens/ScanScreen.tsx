import { SafeAreaView } from 'react-native'
import DefaultPage from '../components/generics/DefaultPage'
import AppStyles from '../styles/Styles'

function ScanScreen ({ navigation }: { navigation: any }): React.JSX.Element {
  return (
    <SafeAreaView style={{ ...AppStyles.defaultBackground, flex: 1 }}>
      <DefaultPage
        navigation={navigation}
        title='Scan'
        children={undefined}
      ></DefaultPage>
    </SafeAreaView>
  )
}

export default ScanScreen
