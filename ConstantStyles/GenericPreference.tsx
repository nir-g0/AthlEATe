import React, { useState } from 'react'
import {
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native'

type PickerProps = {
  title: string // The title to be displayed above the input
  placeholder: string // Placeholder text for the input
  buttonText: string // Text for the add button
  selectedItems: string[] // Initial selected items (optional)
  onSelectionChange: (items: string[]) => void // Callback to handle selection changes
}

const GeneralPicker = ({
  title,
  placeholder,
  buttonText,
  selectedItems = [],
  onSelectionChange
}: PickerProps) => {
  const [text, setText] = useState('')
  const [selectedPreferences, setSelectedPreferences] =
    useState<string[]>(selectedItems)

  const handleAddItem = () => {
    if (text !== '' && !selectedPreferences.includes(text)) {
      const newSelectedPreferences = [text, ...selectedPreferences]
      setSelectedPreferences(newSelectedPreferences)
      setText('')
      onSelectionChange(newSelectedPreferences)
    }
  }

  const handleRemoveItem = (item: string) => {
    const newSelectedPreferences = selectedPreferences.filter(
      pref => pref !== item
    )
    setSelectedPreferences(newSelectedPreferences)
    onSelectionChange(newSelectedPreferences)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholderTextColor={'#000000'}
          placeholder={placeholder}
          value={text}
          onChangeText={setText}
          cursorColor={'#000000'}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddItem}>
          <Text style={styles.Text}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView} horizontal={true}>
        {selectedPreferences.map(item => (
          <View style={styles.Bubble} key={item}>
            <Text style={styles.Text}>{item}</Text>
            <TouchableOpacity onPress={() => handleRemoveItem(item)}>
              <Text style={styles.removeText}> X</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    maxHeight: '20%',
    paddingBottom: 10
  },
  title: {
    color: '#000000',
    fontWeight: '400',
    fontSize: 16,
    fontFamily: 'Menlo',
    alignSelf: 'flex-start',
    marginVertical: 10
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5
  },
  input: {
    height: 'auto',
    width: '50%',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderColor: '#42D951',
    borderWidth: 1,
    borderRadius: 18,
    marginRight: 8
  },
  addButton: {
    backgroundColor: '#42D951',
    borderRadius: 18,
    paddingVertical: 8,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  scrollView: {
    maxHeight: '30%',
    marginBottom: 0
  },
  Bubble: {
    flexDirection: 'row',
    marginRight: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#42D951',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center'
  },
  Text: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
    fontFamily: 'Menlo'
  },
  removeText: {
    color: '#FFFFFF',
    marginLeft: 5,
    fontWeight: '600'
  }
})

export default GeneralPicker
