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
      <ScrollView>
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
        <View style={styles.inputRow}>
          <Text style={fonts.heading2}>Current Weight (lbs):</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor={'#999'}
            placeholder={'0'}
            inputMode='numeric'
            value={currentWeight}
            returnKeyType='done'
            onChangeText={setCurrentWeight}
            cursorColor={'#42D951'}
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={fonts.heading2}>Goal Weight (lbs):</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor={'#999'}
            placeholder={'0'}
            inputMode='numeric'
            value={weightGoal}
            returnKeyType='done'
            onChangeText={setWeightGoal}
            cursorColor={'#42D951'}
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={fonts.heading2}>Daily Caloric Goal:</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor={'#999'}
            placeholder={'0'}
            inputMode='numeric'
            value={calories}
            returnKeyType='done'
            onChangeText={setCalories}
            cursorColor={'#42D951'}
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={fonts.heading2}>Daily Hydration Goal (oz):</Text>
          <TextInput
            style={styles.input}
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
      </ScrollView>
    </DefaultPage>
  )
}

const styles = StyleSheet.create({
  inputRow: {
    ...compStyles.whiteContainer,
    flexDirection: 'row'
  },
  input: {
    height: height * 0.05,
    width: width * 0.2,
    paddingHorizontal: width * 0.03,
    borderColor: '#42D951',
    borderWidth: 1,
    borderRadius: width * 0.02,
    textAlign: 'center',
    ...fonts.greyTextSmall
  }
})

export default DietScreen
