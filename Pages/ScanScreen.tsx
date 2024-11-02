import {SafeAreaView} from 'react-native'
import DefaultPage from '../ConstantStyles/DefaultPage'
import AppStyles from '../ConstantStyles/Styles'

function ScanScreen ({navigation}: {navigation: any}): React.JSX.Element {
  return (
    <SafeAreaView style={{...AppStyles.defaultBackground, flex: 1}}>
      <DefaultPage
        navigation={navigation}
        title='Scan'
        children={undefined}></DefaultPage>
    </SafeAreaView>
  )
}

export default ScanScreen
