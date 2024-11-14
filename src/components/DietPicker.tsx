import { useState } from 'react'
import { TouchableOpacity, View, Text, Dimensions } from 'react-native'
import compStyles from '../styles/compStyles'
import fonts from '../styles/fonts'

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

  const toggleSelection = (type: string) => {
    if (selectedDiet.includes(type)) {
      setSelectedDiet(selectedDiet.filter(item => item !== type))
    } else {
      if (type === 'Default') {
        setSelectedDiet(['Default'])
      } else {
        const filteredDiet = selectedDiet.filter(item => item !== 'Default')
        setSelectedDiet([type, ...filteredDiet])
      }
    }
    handleSelectionChange()
  }

  return (
    <View>
      {dietTypes.map(type => (
        <TouchableOpacity
          key={type}
          style={compStyles.rowWhiteContainer}
          onPress={() => toggleSelection(type)}
        >
          <View
            style={[
              compStyles.bubble,
              {
                backgroundColor: selectedDiet.includes(type)
                  ? '#39c026'
                  : '#d1d1d1'
              }
            ]}
          />
          <Text style={{ ...fonts.flex, ...fonts.greyText, marginLeft: '5%' }}>
            {type}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default DietPicker
