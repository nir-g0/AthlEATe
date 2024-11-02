import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AppStyles from './Styles'

function HomeScreenButtom ({
  title,
  imagePath,
  press = () => {}
}): React.JSX.Element {
  let path = imagePath.toString()
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#42D951', //'#69e05a',
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 4
        },
        shadowOpacity: 0.35,
        shadowRadius: 3,
        flex: 1,
        borderRadius: 10,
        margin: '2.5%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0
      }}
      onPress={press}
    >
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <View>
          <Image
            source={imagePath} // Path to the image file
            style={{ width: 80, height: 80 }}
            resizeMode='cover'
          />
          <Text style={AppStyles.sectionTitle}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default HomeScreenButtom
