import {SafeAreaView} from 'react-native'
import DefaultPage from '../ConstantStyles/DefaultPage'
import AppStyles from '../ConstantStyles/Styles'
import React from 'react'

function MealsScreen ({navigation}: {navigation: any}): React.JSX.Element {
  return (
    <SafeAreaView style={{...AppStyles.defaultBackground, flex: 1}}>
      <DefaultPage
        navigation={navigation}
        title='Meals'
        children={undefined}></DefaultPage>
    </SafeAreaView>
  )
}

export default MealsScreen
