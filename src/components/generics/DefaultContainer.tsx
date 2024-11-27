import { View, SafeAreaView } from 'react-native'
import AppStyles from '../../styles/Styles'

type DefaultContainerProps = {
  children?: React.ReactNode
}

function DefaultContainer ({
  children
}: DefaultContainerProps): React.JSX.Element {
  return (
    <SafeAreaView style={{ backgroundColor: '#F8F9F9', flex: 1 }}>
      <View style={{ flex: 1, alignItems: 'center' }}>{children}</View>
    </SafeAreaView>
  )
}

export default DefaultContainer
