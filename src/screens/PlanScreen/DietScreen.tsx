import { useState } from 'react'
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Dimensions,
  Animated
} from 'react-native'
import React, { useEffect, useRef } from 'react'
import DefaultPage from '../../components/generics/DefaultPage'
import DietPicker from '../../components/DietPicker'
import GenericPreference from '../../components/generics/GenericPreference'
import fonts from '../../styles/fonts'
import compStyles from '../../styles/compStyles'
import Spacer from '../../components/generics/Spacer'

const { width, height } = Dimensions.get('window')

function DietScreen ({ navigation }: { navigation: any }) {
  const [currentWeight, setCurrentWeight] = useState('')
  const [weightGoal, setWeightGoal] = useState('')
  const [calories, setCalories] = useState('')
  const [hydration, setHydration] = useState('')

  return (
    <DefaultPage title={'Diet Preferences'} navigation={navigation}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={fonts.heading2}>Select Your Diet Type</Text>
        <DietPicker onSelectionChange={() => {}} />
        <Spacer />
        <GenericPreference
          title={'Allergies'}
          placeholder={'Allergies here...'}
          buttonText={'Add'}
          selectedItems={[]}
          onSelectionChange={() => {}}
        />
        <Spacer />

        <GenericPreference
          title={'Other Food Preferences'}
          placeholder={'Add here...'}
          buttonText={'Add'}
          selectedItems={[]}
          onSelectionChange={item => console.log(item)}
        />
        <Spacer />
        <View style={compStyles.rowWhiteContainer}>
          <Text style={fonts.heading2}>Current Weight (lbs):</Text>
          <TextInput
            style={inputStyle} // Set font size to prevent dynamic resizing}}}
            placeholderTextColor={'#999'}
            placeholder={'0'}
            inputMode='numeric'
            value={currentWeight}
            returnKeyType='done'
            onChangeText={setCurrentWeight}
            cursorColor={'#42D951'}
          />
        </View>
        <View style={compStyles.rowWhiteContainer}>
          <Text style={fonts.heading2}>Goal Weight (lbs):</Text>
          <TextInput
            style={inputStyle}
            placeholderTextColor={'#999'}
            placeholder={'0'}
            inputMode='numeric'
            value={weightGoal}
            returnKeyType='done'
            onChangeText={setWeightGoal}
            cursorColor={'#42D951'}
          />
        </View>
        <View style={compStyles.rowWhiteContainer}>
          <Text style={fonts.heading2}>Daily Caloric Goal:</Text>
          <TextInput
            style={inputStyle}
            placeholderTextColor={'#999'}
            placeholder={'0'}
            inputMode='numeric'
            value={calories}
            returnKeyType='done'
            onChangeText={setCalories}
            cursorColor={'#42D951'}
          />
        </View>
        <View style={compStyles.rowWhiteContainer}>
          <Text style={fonts.heading2}>Daily Hydration Goal (oz):</Text>
          <TextInput
            style={inputStyle}
            placeholderTextColor={'#999'}
            placeholder={'0'}
            inputMode='numeric'
            value={hydration}
            returnKeyType='done'
            onChangeText={setHydration}
            cursorColor={'#42D951'}
          />
        </View>
        <Spacer />

        <TouchableOpacity style={compStyles.bottomGreenButton}>
          <Text style={fonts.whiteTextBold}>Save</Text>
        </TouchableOpacity>
        <Spacer />
      </ScrollView>
    </DefaultPage>
  )
}

const inputStyle = {
  ...compStyles.whiteContainer,
  ...fonts.greyTextSmall,
  width: width / 6
}

export default DietScreen
