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
            fontSize: 12,
            fontFamily: 'Menlo',
            alignSelf: 'flex-start',
            marginLeft: '5%',
            marginTop: '1%'
          }}
        >
          Adjust season intensity:
        </Text>
        <Graph />
        <PlanButton title={'Diet preferences & allergies'} />
        <PlanButton title={'Nutrition & weight goals'} />
        <PlanButton title={'Sport specifics'} />
        <PlanButton title={'Meal frequency and timing'} />
        <PlanButton title={'Budget adjustments'} />
        <TouchableOpacity
          style={{
            backgroundColor: '#42D951',
            borderRadius: 10,
            width: '95%',
            flex: 1.25,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 0,
            marginBottom: '1%',
            borderBottomColor: '#AAAAAA',
            borderBottomWidth: 1
          }}
        >
          <Text style={AppStyles.sectionTitle}>Generate Plan</Text>
        </TouchableOpacity>
      </DefaultPage>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  chartContainer: {
    marginVertical: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: '#3a7532',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    borderRadius: 10
  },
  draggablePoint: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'red'
  }
})

export default PlanScreen
