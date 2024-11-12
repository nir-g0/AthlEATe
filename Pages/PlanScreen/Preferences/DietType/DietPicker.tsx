import { useState } from 'react'
import {
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native'

const { width, height } = Dimensions.get('window')

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
    <View style={styles.container}>
      {dietTypes.map(type => (
        <TouchableOpacity
          key={type}
          style={styles.optionContainer}
          onPress={() => toggleSelection(type)}
        >
          <View
            style={[
              styles.bubble,
              {
                backgroundColor: selectedDiet.includes(type)
                  ? '#39c026'
                  : '#f1f1f1'
              }
            ]}
          />
          <Text style={styles.optionText}>{type}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    overflow: 'hidden'
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: height * 0.005,
    marginRight: 1,
    paddingVertical: height * 0.004,
    paddingHorizontal: width * 0.025,
    backgroundColor: '#ffffff',
    borderRadius: width * 0.04,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 }
  },
  bubble: {
    height: width * 0.05,
    width: width * 0.05,
    borderRadius: width * 0.025,
    borderWidth: 1,
    borderColor: '#39c026',
    backgroundColor: '#f1f1f1'
  },
  optionText: {
    marginLeft: width * 0.02,
    fontSize: width * 0.04,
    fontWeight: '500',
    color: '#4a4a4a',
    fontFamily: 'Menlo'
  }
})

export default DietPicker
