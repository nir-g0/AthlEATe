import {View, Text, StyleSheet} from 'react-native'

function DefaultTitle (): React.JSX.Element {
  return (
    <View style={{flexDirection: 'row'}}>
      <Text style={{...styleSheet.NonEat, marginRight: -1}}>Athl</Text>
      <Text style={styleSheet.Eat}>EAT</Text>
      <Text style={{...styleSheet.NonEat, marginLeft: -5}}>e</Text>
    </View>
  )
}
const styleSheet = StyleSheet.create({
  NonEat: {
    fontWeight: '600',
    fontSize: 36,
    fontFamily: 'Menlo',
    color: '#000000',
  },
  Eat: {
    fontFamily: 'Menlo',
    fontSize: 36,
    fontWeight: '800',
    color: '#39c026',
  },
})

export default DefaultTitle
