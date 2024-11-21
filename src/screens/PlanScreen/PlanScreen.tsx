import React, { useState, useRef } from 'react'
import {
  Text,
  TouchableOpacity,
  ScrollView,
  Animated,
  Dimensions,
  View
} from 'react-native'
import DefaultPage from '../../components/generics/DefaultPage'
import PlanButton from '../../components/PlanButton'
import fonts from '../../styles/fonts'
import compStyles from '../../styles/compStyles'
import Spacer from '../../components/generics/Spacer'

function PlanScreen ({ navigation }) {
  const [prog, setProg] = useState(
    require('../../../assets/images/progress/plan-prog-0.png')
  )
  const [nextProg, setNextProg] = useState(null)
  const [comp, setComp] = useState(0)
  const [diet, setDiet] = useState(false)
  const [sport, setSport] = useState(false)
  const [timing, setTiming] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true)

  const newOpacity = useRef(new Animated.Value(0)).current
  const oldOpacity = useRef(new Animated.Value(1)).current

  const fadeInNewImage = newProg => {
    setNextProg(newProg)
    Animated.sequence([
      Animated.timing(newOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      }),
      Animated.timing(oldOpacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true
      })
    ]).start(() => {
      setProg(newProg)
      oldOpacity.setValue(1)
      setTimeout(() => {
        newOpacity.setValue(0)
        setNextProg(null)
      }, 100)
    })
  }

  const checkComplete = () => {
    if (comp === 0) {
      fadeInNewImage(require('../../../assets/images/progress/plan-prog-1.png'))
    } else if (comp === 1) {
      fadeInNewImage(require('../../../assets/images/progress/plan-prog-2.png'))
    } else if (comp === 2) {
      fadeInNewImage(
        require('../../../assets/images/progress/plan-prog-2-2.png')
      )
      setTimeout(() => {
        setIsDisabled(false)
      }, 800)
    }
  }

  const { height } = Dimensions.get('screen')

  return (
    <DefaultPage navigation={navigation} title='Plan'>
      <View>
        <View
          style={[
            compStyles.rowWhiteContainer,
            { width: height / 3, height: height / 3 }
          ]}
        >
          <Animated.Image
            source={prog}
            style={{
              position: 'absolute',
              width: height / 3,
              height: height / 3,
              opacity: oldOpacity
            }}
            resizeMode='cover'
          />
          {nextProg && (
            <Animated.Image
              source={nextProg}
              style={{
                position: 'absolute',
                width: height / 3,
                height: height / 3,
                opacity: newOpacity
              }}
              resizeMode='cover'
            />
          )}
        </View>
        <Spacer />
        <PlanButton
          title={'Diet preferences & allergies'}
          press={() => {
            navigation.navigate('Diet', {
              onSave: () => {
                if (!diet) {
                  setDiet(true)
                  checkComplete()
                  setComp(comp + 1)
                }
              }
            })
          }}
        />
        <PlanButton
          title={'Sport specifics'}
          press={() => {
            navigation.navigate('Sport', {
              onSave: () => {
                if (!sport) {
                  setSport(true)
                  checkComplete()
                  setComp(comp + 1)
                }
              }
            })
          }}
        />

        <PlanButton
          title={'Meal timing and budget'}
          press={() => {
            navigation.navigate('Timing', {
              onSave: () => {
                if (!timing) {
                  setTiming(true)
                  checkComplete()
                  setComp(comp + 1)
                }
              }
            })
          }}
        />
        <Spacer />
        <TouchableOpacity
          disabled={isDisabled}
          style={[
            compStyles.bottomGreenButton,
            {
              shadowOpacity: isDisabled ? 0 : 0.1,
              backgroundColor: isDisabled
                ? '#D3D3D3'
                : compStyles.themeBrightGreen.backgroundColor
            }
          ]}
          onPress={() => {
            navigation.pop()
            navigation.navigate('Meals')
          }}
        >
          <Text style={fonts.whiteTextBold}>Generate Plan</Text>
        </TouchableOpacity>
      </View>
    </DefaultPage>
  )
}

export default PlanScreen
