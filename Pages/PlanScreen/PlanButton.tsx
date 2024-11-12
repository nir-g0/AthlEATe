import { TouchableOpacity, Text, View } from 'react-native'

function PlanButton ({ title, press = () => {} }) {
  return (
    <View
      style={{
        width: '95%',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        marginBottom: '2%',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        ...shadow
      }}
    >
      <View style={{ flex: 0.95 }}>
        <Text
          style={{
            marginLeft: '2.5%',
            color: '#000000',
            fontWeight: '400',
            fontSize: 16,
            fontFamily: 'Menlo'
          }}
        >
          {title}
        </Text>
      </View>

      <TouchableOpacity onPress={press}>
        <Text
          style={{
            color: '#797979',
            fontSize: 15,
            fontFamily: 'Menlo'
          }}
        >
          Edit
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const shadow = {
  shadowColor: '#000',
  shadowOpacity: 0.15,
  shadowRadius: 3,
  shadowOffset: { width: 0, height: 0 }
}
export default PlanButton
