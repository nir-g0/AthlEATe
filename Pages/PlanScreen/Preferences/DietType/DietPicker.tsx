import { useState } from 'react'
import {
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StyleSheet
} from 'react-native'
import DefaultPicker from '../../../../ConstantStyles/DefaultPicker'

const dietTypes = [
  'Default',
  'Halal',
  'Keto',
  'Kosher',
  'Pescatarian',
  'Vegan',
  'Vegetarian'
]
function DietPicker ({
  onSelectionChange
}: {
  onSelectionChange: (items: string[]) => void
}) {
  const [selectedDiet, setSelectedDiet] = useState<string[]>([''])
  const handleSelectionChange = () => {
    onSelectionChange(selectedDiet)
  }
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1, // Adjust if needed to control vertical space
        overflow: 'hidden'
      }}
    >
      {dietTypes.map(type => (
        <TouchableOpacity
          key={type}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 10
          }}
          onPress={() => {
            if (selectedDiet.includes(type)) {
              let ret = selectedDiet.filter(item => {
                return item !== type
              })
              setSelectedDiet([...ret])
              return
            }
            if (type === 'Default') {
              setSelectedDiet(['Default'])
            } else {
              let ret = selectedDiet.filter(item => {
                return item !== 'Default'
              })
              setSelectedDiet([type, ...ret])
            }
          }}
        >
          <View
            style={{
              ...styles.Bubble,
              backgroundColor: selectedDiet.includes(type) ? '#39c026' : 'white'
            }}
          />
          <Text
            style={{
              color: '#000000',
              fontWeight: '200',
              fontSize: 16,
              fontFamily: 'Menlo',
              marginLeft: 3,
              marginRight: 10
            }}
          >
            {type}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}
const styles = StyleSheet.create({
  Bubble: {
    height: 20,
    width: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#39c026'
  }
})
export default DietPicker
