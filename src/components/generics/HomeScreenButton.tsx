import { Image, Text, TouchableOpacity, View } from 'react-native'
import AppStyles from '../../styles/Styles'
import fonts from '../../styles/fonts'
import compStyles from '../../styles/compStyles'

function HomeScreenButtom ({
  title,
  imagePath,
  press = () => {}
}): React.JSX.Element {
  let path = imagePath.toString()
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#42D951',
        flex: 1,
        borderRadius: 10,
        margin: '2.5%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        ...compStyles.shadow
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
          <Text style={fonts.whiteTextBold}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default HomeScreenButtom
