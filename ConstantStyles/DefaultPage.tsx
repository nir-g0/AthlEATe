import { SafeAreaView, View, TouchableOpacity, Text, Image } from 'react-native'
import AppStyles from './Styles'

function DefaultPage ({ navigation, title = 'Title', children }) {
  return (
    <SafeAreaView style={{ ...AppStyles.defaultBackground, flex: 1 }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomColor: '#BBBBBB',
          borderBottomWidth: 0.5,
          marginHorizontal: '2.5%'
        }}
      >
        <View style={{ flex: 1 }} />
        <View style={{ flex: 2, alignItems: 'center' }}>
          <Text
            style={{
              fontFamily: 'Menlo',
              color: '#000000',
              fontSize: 19,
              fontWeight: '600'
            }}
          >
            {title}
          </Text>
        </View>
        <View style={{ flex: 1 }} />
      </View>
      <View style={{ flex: 1, alignItems: 'center' }}>{children}</View>
    </SafeAreaView>
  )
}

export default DefaultPage
