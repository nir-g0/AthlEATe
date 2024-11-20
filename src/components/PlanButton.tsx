import { TouchableOpacity, Text, View } from 'react-native'
import fonts from '../styles/fonts'
import compStyles from '../styles/compStyles'

function PlanButton ({ title, press = () => {}, expand = 'Edit' }) {
  return (
    <View
      style={{
        ...compStyles.whiteContainer,
        flexDirection: 'row'
      }}
    >
      <View style={{ flex: 1 }}>
        <Text style={fonts.heading1}>{title}</Text>
      </View>

      <TouchableOpacity onPress={press}>
        <Text style={fonts.greyTextSmall}>{expand}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default PlanButton
