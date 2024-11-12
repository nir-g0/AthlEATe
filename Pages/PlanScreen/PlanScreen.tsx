import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native'
import AppStyles from '../../ConstantStyles/Styles'
import DefaultPage from '../../ConstantStyles/DefaultPage'
import Graph from './Graph'
import PlanButton from './PlanButton'

function PlanScreen ({ navigation }) {
  return (
    <SafeAreaView style={{ ...AppStyles.defaultBackground, flex: 1 }}>
      <DefaultPage navigation={navigation} title='Plan'>
        <Text
          style={{
            color: '#000000',
            fontWeight: '400',
            fontSize: 16,
            fontFamily: 'Menlo',
            alignSelf: 'flex-start',
            marginLeft: '5%',
            marginTop: '1%'
          }}
        >
          Adjust season intensity:
        </Text>
        <Graph />
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
          style={{
            backgroundColor: '#42D951',
            borderRadius: 10,
            width: '95%',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 0,
            marginBottom: '1%',
            ...shadow
          }}
        >
          <Text style={AppStyles.sectionTitle}>Generate Plan</Text>
        </TouchableOpacity>
      </DefaultPage>
    </SafeAreaView>
  )
}

const shadow = {
  shadowColor: '#000',
  shadowOpacity: 0.25,
  shadowRadius: 4,
  shadowOffset: { width: 0, height: 2 }
}

export default PlanScreen
