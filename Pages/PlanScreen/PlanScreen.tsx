import React, {useState} from 'react'
import {SafeAreaView, StyleSheet} from 'react-native'
import AppStyles from '../../ConstantStyles/Styles'
import DefaultPage from '../../ConstantStyles/DefaultPage'
import Graph from './Graph'

function PlanScreen ({navigation}) {
  return (
    <SafeAreaView style={{...AppStyles.defaultBackground, flex: 1}}>
      <DefaultPage navigation={navigation} title='Plan'>
        <Graph />
      </DefaultPage>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  chartContainer: {
    marginVertical: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: '#3a7532',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 6,
    borderRadius: 10,
  },
  draggablePoint: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'red',
  },
})

export default PlanScreen
