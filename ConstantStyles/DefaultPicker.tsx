import {
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StyleSheet
} from 'react-native'

function DefaultPicker ({
  options,
  press = () => {}
}: {
  options: string[]
  press: () => void
}) {
  return (
    <ScrollView style={{ maxHeight: '25%' }} horizontal={true}>
      {options.map(type => (
        <TouchableOpacity
          key={type}
          onPress={press}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 10
          }}
        >
          <View
            style={{
              ...styles.Bubble,
              backgroundColor: options.includes(type) ? '#39c026' : 'white'
            }}
          />
          <Text style={{ marginLeft: 3, marginRight: 10 }}>{type}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  Bubble: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#39c026'
  }
})

export default DefaultPicker
