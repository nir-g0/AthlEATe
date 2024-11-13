import { SafeAreaView, View, Text } from 'react-native'
import fonts from '../../styles/fonts'

function DefaultPage ({ navigation, title = 'Title', children }) {
  return (
    <SafeAreaView style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
        <View style={{ flex: 1 }} />
        <View style={{ flex: 2.5, alignItems: 'center' }}>
          <Text style={fonts.heading1}>{title}</Text>
        </View>
        <View style={{ flex: 1 }} />
      </View>
      <View
        style={{
          flex: 1,
          paddingHorizontal: '3.5%'
        }}
      >
        {children}
      </View>
    </SafeAreaView>
  )
}

export default DefaultPage
