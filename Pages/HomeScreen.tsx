import {PropsWithChildren} from 'react'
import {View, Image} from 'react-native'
import DefaultContainer from '../ConstantStyles/DefaultContainer'
import HomeScreenButtom from '../ConstantStyles/HomeScreenButton'

type SectionProps = PropsWithChildren<{
  title: string
}>

function HomeScreen ({navigation}: {navigation: any}): React.JSX.Element {
  return (
    <DefaultContainer>
      <View
        style={{
          flex: 1,
          backgroundColor: '#FFFFFF',
          shadowColor: '#3a7532',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.5,
          shadowRadius: 6,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          margin: 10,
          height: '50%',
          width: '90%',
        }}>
        <Image
          source={require('../assets/images/tempCircles.png')} // Path to the image file
          style={{width: 300, height: 300}}
          resizeMode='cover'
        />
      </View>
      <View style={{flexDirection: 'row', flex: 0.45}}>
        <View style={{marginLeft: '5%', flex: 1}}>
          <HomeScreenButtom
            title={'Plan'}
            imagePath={require('../assets/icons/plan.png')}
            press={() => {
              navigation.navigate('Plan')
            }}
          />
        </View>
        <View style={{marginRight: '5%', flex: 1}}>
          <HomeScreenButtom
            title={'Track'}
            imagePath={require('../assets/icons/progress.png')}
            press={() => {
              navigation.navigate('Track')
            }}
          />
        </View>
      </View>
      <View style={{flexDirection: 'row', flex: 0.45}}>
        <View style={{marginLeft: '5%', flex: 1}}>
          <HomeScreenButtom
            title={'Meals'}
            imagePath={require('../assets/icons/dinner.png')}
            press={() => {
              navigation.navigate('Meals')
            }}
          />
        </View>
        <View style={{marginRight: '5%', flex: 1}}>
          <HomeScreenButtom
            title={'Scan'}
            imagePath={require('../assets/icons/qr.png')}
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
