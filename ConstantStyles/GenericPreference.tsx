import React, { useState } from 'react'
import {
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Dimensions
} from 'react-native'

const { width, height } = Dimensions.get('window')

type PickerProps = {
  title: string
  placeholder: string
  buttonText: string
  selectedItems: string[]
  onSelectionChange: (items: string[]) => void
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
          placeholderTextColor={'#999'}
          placeholder={placeholder}
          value={text}
          onChangeText={setText}
          cursorColor={'#42D951'}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddItem}>
          <Image
            style={styles.addIcon}
            resizeMode='cover'
            source={require('../assets/icons/add.png')}
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.scrollView}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {selectedPreferences.map(item => (
          <View style={styles.bubble} key={item}>
            <Text style={styles.bubbleText}>{item}</Text>
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
    flex: 1.5,
    paddingBottom: height * 0.02,
    margin: 5
  },
  title: {
    fontSize: width * 0.04,
    fontWeight: '500',
    color: '#333',
    marginBottom: height * 0.012,
    fontFamily: 'Menlo'
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height * 0.01,
    backgroundColor: '#f9f9f9',
    borderRadius: width * 0.02,
    paddingHorizontal: width * 0.02,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 0 }
  },
  input: {
    flex: 1,
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.03,
    fontSize: width * 0.04,
    color: '#333',
    fontFamily: 'Menlo'
  },
  addButton: {
    backgroundColor: '#42D951',
    borderRadius: width * 0.04,
    padding: width * 0.025,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: width * 0.02
  },
  addIcon: {
    width: width * 0.04,
    height: width * 0.04
  },
  scrollView: {
    maxHeight: height * 0.05,
    marginTop: height * 0.01
  },
  bubble: {
    flexDirection: 'row',
    // marginRight: width * 0.02,
    margin: width * 0.02,
    flex: 1,
    paddingHorizontal: width * 0.04,
    backgroundColor: '#42D951',
    borderRadius: width * 0.04,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 1 }
  },
  bubbleText: {
    color: '#FFF',
    fontWeight: '600',
    fontFamily: 'Menlo',
    fontSize: width * 0.04,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  removeText: {
    color: '#FFF',
    marginLeft: width * 0.01,
    fontWeight: '600',
    fontSize: width * 0.035
  }
})

export default GeneralPicker
