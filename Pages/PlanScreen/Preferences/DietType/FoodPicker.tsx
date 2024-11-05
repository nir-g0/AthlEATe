import { useState } from 'react'
import {
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native'

function FoodPicker () {
  const [selectedPreferences, setSelectedPreferences] = useState<string[]>([])
  const [text, setText] = useState('')
  return (
    <View
      style={{
        maxHeight: '20%'
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 5
        }}
      >
        <TextInput
          style={styles.input}
          placeholderTextColor={'#000000'}
          placeholder='Type here...'
          value={text}
          onChangeText={newText => setText(newText)}
          cursorColor={'#000000'}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            if (text !== '' && !selectedPreferences.includes(text)) {
              setText('')
              setSelectedPreferences([text, ...selectedPreferences])
            }
          }}
        >
          <Text style={styles.Text}>Add</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={{ maxHeight: '30%' }} horizontal={true}>
        {selectedPreferences.map(type => (
          <View style={styles.Bubble} key={type}>
            <Text style={styles.Text}>{type}</Text>
            <TouchableOpacity
              onPress={() => {
                setSelectedPreferences(
                  selectedPreferences.filter(item => item !== type)
                )
              }}
            >
              <Text style={styles.removeText}> X</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  Bubble: {
    flexDirection: 'row',
    marginRight: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#39c026',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  Text: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
    fontFamily: 'Menlo'
  },
  input: {
    height: 'auto',
    width: '50%',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderColor: '#39c026',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 8
  },
  addButton: {
    backgroundColor: '#39c026',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  removeText: {
    color: '#FFFFFF',
    marginLeft: 5,
    fontWeight: '600'
  }
})

export default FoodPicker
