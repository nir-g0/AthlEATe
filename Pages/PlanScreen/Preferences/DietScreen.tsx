import {
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import DefaultPage from '../../../ConstantStyles/DefaultPage'
import { useState } from 'react'

const dietTypes = [
  'Default',
  'Vegetarian',
  'Pescatarian',
  'Vegan',
  'Keto',
  'Kosher',
  'Halal'
]

function DietScreen ({ navigation }) {
  const [selectedDiet, setSelectedDiet] = useState<string[]>([])

  return (
    <DefaultPage title={'Diet Preferences'} navigation={navigation}>
      <View
        style={{ marginLeft: '5%', alignContent: 'center', marginTop: '1%' }}
      >
        <Text
          style={{
            color: '#000000',
            fontWeight: '400',
            fontSize: 16,
            fontFamily: 'Menlo',
            alignSelf: 'flex-start'
          }}
        >
          Select Your Diet Type
        </Text>
        <ScrollView style={{ maxHeight: '25%' }} horizontal={true}>
          {dietTypes.map(type => (
            <TouchableOpacity
              key={type}
              onPress={() => {
                if (type === 'Default') {
                  setSelectedDiet(['Default'])
                } else if (selectedDiet.includes(type)) {
                  let ret = selectedDiet.filter(item => {
                    return item !== type
                  })
                  setSelectedDiet([...ret])
                } else {
                  let ret = selectedDiet.filter(item => {
                    return item !== 'Default'
                  })
                  setSelectedDiet([type, ...ret])
                }
              }}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 10
              }}
            >
              <View
                style={{
                  ...styles.Bubble,
                  backgroundColor: selectedDiet.includes(type)
                    ? '#39c026'
                    : 'white'
                }}
              />
              <Text style={{ marginLeft: 3, marginRight: 10 }}>{type}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </DefaultPage>
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
export default DietScreen
