import { TouchableOpacity, Text, View } from 'react-native'

function PlanButton ({ title, press = () => {} }) {
  return (
    <View
      style={{
        width: '95%',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 0,
        marginBottom: '1%',
        borderTopColor: '#AAAAAA',
        borderTopWidth: 1
      }}
    >
      <View style={{ flex: 0.95 }}>
        <Text
          style={{
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

export default PlanButton
