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
import fonts from '../../styles/fonts'
import compStyles from '../../styles/compStyles'

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
    <View>
      <Text style={fonts.heading2}>{title}</Text>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholderTextColor={'#999'}
          placeholder={placeholder}
          value={text}
          onChangeText={setText}
          cursorColor={'#42D951'}
        />
        <TouchableOpacity
          style={[compStyles.circle, compStyles.themeBrightGreen]}
          onPress={handleAddItem}
        >
          <Image
            style={styles.addIcon}
            resizeMode='cover'
            source={require('../../../assets/icons/add.png')}
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.scrollView}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {selectedPreferences.map(item => (
          <View
            style={[
              compStyles.bubble,
              compStyles.themeBrightGreen,
              { flexDirection: 'row' }
            ]}
            key={item}
          >
            <Text style={fonts.whiteText}>{item}</Text>
            <TouchableOpacity onPress={() => handleRemoveItem(item)}>
              <Text style={fonts.whiteText}> X</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    ...compStyles.whiteContainer,
    flexDirection: 'row',
    flex: 1
  },
  addButton: {
    backgroundColor: '#42D951'
  },
  addIcon: {
    width: width * 0.04,
    height: width * 0.04
  },
  scrollView: {
    maxHeight: height * 0.05,
    marginTop: height * 0.01
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
