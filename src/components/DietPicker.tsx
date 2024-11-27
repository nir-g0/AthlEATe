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
  const [selectedDiet, setSelectedDiet] = useState<string[]>([])

  const handleSelectionChange = updatedDiet => {
    onSelectionChange(updatedDiet)
  }

  const toggleSelection = (type: string) => {
    setSelectedDiet(prevDiet => {
      let updatedDiet
      if (prevDiet.includes(type)) {
        updatedDiet = prevDiet.filter(item => item !== type)
      } else {
        if (type === 'Default') {
          updatedDiet = ['Default']
        } else {
          const filteredDiet = prevDiet.filter(item => item !== 'Default')
          updatedDiet = [type, ...filteredDiet]
        }
      }
      handleSelectionChange(updatedDiet)
      return updatedDiet
    })
  }

  return (
    <View>
      {dietTypes.map(type => (
        <TouchableOpacity
          key={type}
          style={[compStyles.rowWhiteContainer, compStyles.themeWhite]}
          onPress={() => toggleSelection(type)}
        >
          <View
            style={[
              compStyles.bubble,
              {
                backgroundColor: selectedDiet.includes(type)
                  ? compStyles.themeBrightGreen.color
                  : compStyles.themeGrey.color
              }
            ]}
          />
          <Text style={{ ...fonts.greyText, marginLeft: '5%' }}>{type}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default DietPicker
