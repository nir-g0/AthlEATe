import { PropsWithChildren } from 'react'
import { View, Image, Dimensions } from 'react-native'
import DefaultContainer from '../components/generics/DefaultContainer'
import HomeScreenButtom from '../components/generics/HomeScreenButton'
import compStyles from '../styles/compStyles'
import Spacer from '../components/generics/Spacer'

type SectionProps = PropsWithChildren<{
  title: string
}>
const { width, height } = Dimensions.get('screen')
function HomeScreen ({ navigation }: { navigation: any }): React.JSX.Element {
  return (
    <DefaultContainer>
      <View style={compStyles.whiteContainer}>
        <Image
          source={require('../../assets/images/tempCircles.png')} // Path to the image file
          style={{ width: height / 2.65, height: height / 2.65 }}
          resizeMode='cover'
        />
      </View>
      <View style={{ flexDirection: 'row', flex: 0.5 }}>
        <View style={{ marginLeft: '5%', flex: 1 }}>
          <HomeScreenButtom
            title={'Plan'}
            imagePath={require('../../assets/icons/plan.png')}
            press={() => {
              navigation.navigate('Plan')
            }}
          />
        </View>
        <View style={{ marginRight: '5%', flex: 1 }}>
          <HomeScreenButtom
            title={'Track'}
            imagePath={require('../../assets/icons/progress.png')}
            press={() => {
              navigation.navigate('Track')
            }}
          />
        </View>
      </View>
      <View style={{ flexDirection: 'row', flex: 0.5 }}>
        <View style={{ marginLeft: '5%', flex: 1 }}>
          <HomeScreenButtom
            title={'Meals'}
            imagePath={require('../../assets/icons/dinner.png')}
            press={() => {
              navigation.navigate('Meals')
            }}
          />
        </View>
        <View style={{ marginRight: '5%', flex: 1 }}>
          <HomeScreenButtom
            title={'Scan'}
            imagePath={require('../../assets/icons/qr.png')}
            press={() => {
              navigation.navigate('Scan')
            }}
          />
        </View>
      </View>
    </DefaultContainer>
  )
}

export default HomeScreen
