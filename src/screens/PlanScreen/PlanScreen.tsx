import React, { useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView
} from 'react-native'
import DefaultPage from '../../components/generics/DefaultPage'
import PlanButton from '../../components/PlanButton'
import fonts from '../../styles/fonts'
import compStyles from '../../styles/compStyles'

function PlanScreen ({ navigation }) {
  return (
    <DefaultPage navigation={navigation} title='Plan'>
      <ScrollView>
        <PlanButton
          title={'Diet preferences & allergies'}
          press={() => {
            navigation.navigate('Diet')
          }}
        />
        <PlanButton
          title={'Sport specifics'}
          press={() => {
            navigation.navigate('Sport')
          }}
        />
        <PlanButton
          title={'Meal timing and budget'}
          press={() => {
            navigation.navigate('Timing')
          }}
        />
        <TouchableOpacity
          style={compStyles.bottomGreenButton}
          onPress={() => {
            navigation.pop()
            navigation.navigate('Meals')
          }}
        >
          <Text style={fonts.whiteTextBold}>Generate Plan</Text>
        </TouchableOpacity>
      </ScrollView>
    </DefaultPage>
  )
}

export default PlanScreen
