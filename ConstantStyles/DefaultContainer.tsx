import {View, Text, StyleSheet, SafeAreaView} from 'react-native'
import AppStyles from './Styles'
import DefaultTitle from './DefaultTitle'

type DefaultContainerProps = {
  children?: React.ReactNode
}

function DefaultContainer ({
  children,
}: DefaultContainerProps): React.JSX.Element {
  return (
    <SafeAreaView style={{...AppStyles.defaultBackground, flex: 1}}>
      <View style={{flex: 1, alignItems: 'center'}}>{children}</View>
    </SafeAreaView>
  )
}

export default DefaultContainer
