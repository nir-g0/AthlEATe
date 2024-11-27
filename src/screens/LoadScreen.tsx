import { Dimensions, Image, Text, View } from 'react-native'
import DefaultPage from '../components/generics/DefaultPage'
import Spacer from '../components/generics/Spacer'

function LoadScreen ({ navigation }) {
  const { width } = Dimensions.get('screen')
  return (
    <DefaultPage title={'Loading...'} navigation={navigation}>
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <View
        style={{
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center'
        }}
      >
        <Image
          source={require('../../assets/images/loadingAnimation.gif')} // Path to the image file
          style={{ width: width * 0.7, height: width * 0.7 }}
          resizeMode='cover'
        />
      </View>
    </DefaultPage>
  )
}

export default LoadScreen
