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
import DefaultPage from '../../../ConstantStyles/DefaultPage'
import DietPicker from './DietType/DietPicker'
import GenericPreference from '../../../ConstantStyles/GenericPreference'
import React, { useEffect, useRef } from 'react'

const { width, height } = Dimensions.get('window')

function DietScreen ({ navigation }: { navigation: any }) {
  const [currentWeight, setCurrentWeight] = useState('')
  const [weightGoal, setWeightGoal] = useState('')
  const [calories, setCalories] = useState('')
  const [hydration, setHydration] = useState('')

  // Fade animation for scroll hint
  const fadeAnim = useRef(new Animated.Value(1)).current

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true
        }),
        Animated.timing(fadeAnim, {
          toValue: 0.0,
          duration: 1000,
          useNativeDriver: true
        })
      ]),
      { iterations: 10 }
    ).start()
  }, [fadeAnim])

  return (
    <DefaultPage title={'Diet Preferences'} navigation={navigation}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Select Your Diet Type</Text>
        <DietPicker onSelectionChange={() => {}} />

        <GenericPreference
          title={'Allergies'}
          placeholder={'Allergies here...'}
          buttonText={'Add'}
          selectedItems={[]}
          onSelectionChange={() => {}}
        />
        <GenericPreference
          title={'Other Food Preferences'}
          placeholder={'Add here...'}
          buttonText={'Add'}
          selectedItems={[]}
          onSelectionChange={item => console.log(item)}
        />

        <View style={styles.inputRow}>
          <Text style={styles.inputLabel}>Current Weight (lbs):</Text>
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
          <Text style={styles.inputLabel}>Goal Weight (lbs):</Text>
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
          <Text style={styles.inputLabel}>Daily Caloric Goal:</Text>
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
          <Text style={styles.inputLabel}>Daily Hydration Goal (oz):</Text>
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

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Scroll Hint Indicator */}
      <Animated.View style={[styles.scrollHint, { opacity: fadeAnim }]}>
        <Text style={styles.scrollHintText}>Swipe up to see more</Text>
      </Animated.View>
    </DefaultPage>
  )
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: width * 0.05,
    paddingBottom: height * 0.05
  },
  title: {
    fontSize: width * 0.05,
    color: '#333',
    fontWeight: '600',
    fontFamily: 'Menlo',
    alignSelf: 'flex-start',
    marginBottom: height * 0.02
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.04,
    borderRadius: width * 0.03,
    shadowColor: '#000000',
    shadowOpacity: 0.15,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    marginBottom: height * 0.02
  },
  inputLabel: {
    flex: 1,
    fontSize: width * 0.04,
    fontWeight: '500',
    fontFamily: 'Menlo',
    color: '#333'
  },
  input: {
    height: height * 0.05,
    width: width * 0.2,
    paddingHorizontal: width * 0.03,
    borderColor: '#42D951',
    borderWidth: 1,
    borderRadius: width * 0.02,
    textAlign: 'center',
    fontSize: width * 0.04,
    color: '#333'
  },
  saveButton: {
    backgroundColor: '#42D951',
    borderRadius: width * 0.05,
    paddingVertical: height * 0.02,
    alignItems: 'center',
    marginTop: height * 0.02,
    shadowColor: '#42D951',
    shadowOpacity: 0.4,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 }
  },
  saveButtonText: {
    color: '#FFF',
    fontSize: width * 0.05,
    fontWeight: '700',
    fontFamily: 'Menlo'
  },
  scrollHint: {
    position: 'absolute',
    bottom: height * 0.1,
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingHorizontal: width * 0.03,
    paddingVertical: height * 0.005,
    borderRadius: width * 0.02
  },
  scrollHintText: {
    fontSize: width * 0.04,
    color: '#42D951',
    fontFamily: 'Menlo'
  }
})

export default DietScreen
