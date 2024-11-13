import {
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native'

const { width, height } = Dimensions.get('window')

function DefaultPicker ({
  options,
  press = () => {}
}: {
  options: string[]
  press: () => void
}) {
  return (
    <ScrollView
      style={styles.scrollView}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {options.map(type => (
        <TouchableOpacity
          key={type}
          onPress={press}
          style={styles.optionContainer}
        >
          <View
            style={[
              styles.bubble,
              {
                backgroundColor: options.includes(type) ? '#39c026' : '#f1f1f1'
              }
            ]}
          />
          <Text style={styles.optionText}>{type}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    maxHeight: height * 0.08,
    paddingHorizontal: width * 0.03,
    paddingVertical: height * 0.01
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: height * 0.008,
    marginRight: width * 0.025,
    paddingVertical: height * 0.008,
    paddingHorizontal: width * 0.025,
    backgroundColor: '#ffffff',
    borderRadius: width * 0.05,
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
    backgroundColor: '#f1f1f1' // Light gray when not selected
  },
  optionText: {
    marginLeft: width * 0.02,
    fontSize: width * 0.04,
    fontWeight: '500',
    color: '#4a4a4a', // Softer gray for modern look
    fontFamily: 'Menlo'
  }
})

export default DefaultPicker
