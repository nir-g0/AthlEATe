import {SafeAreaView} from 'react-native'
import DefaultPage from '../ConstantStyles/DefaultPage'
import AppStyles from '../ConstantStyles/Styles'

function TrackScreen ({navigation}: {navigation: any}): React.JSX.Element {
  return (
    <SafeAreaView style={{...AppStyles.defaultBackground, flex: 1}}>
      <DefaultPage
        navigation={navigation}
        title='Track'
        children={undefined}></DefaultPage>
    </SafeAreaView>
  )
}

export default TrackScreen
