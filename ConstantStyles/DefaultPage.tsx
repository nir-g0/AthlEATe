import {SafeAreaView, View, TouchableOpacity, Text, Image} from 'react-native'
import AppStyles from './Styles'

function DefaultPage ({navigation, title = 'Title', children}) {
  return (
    <SafeAreaView style={{...AppStyles.defaultBackground, flex: 1}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flex: 1}} />
        <View style={{flex: 2, alignItems: 'center'}}>
          <Text style={{fontFamily: 'Menlo', color: '#000000', fontSize: 18}}>
            {title}
          </Text>
        </View>
        <View style={{flex: 1}} />
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>{children}</View>
    </SafeAreaView>
  )
}

export default DefaultPage
