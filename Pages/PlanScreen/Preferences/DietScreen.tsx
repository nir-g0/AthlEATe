import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput
} from 'react-native'
import DefaultPage from '../../../ConstantStyles/DefaultPage'
import DietPicker from './DietType/DietPicker'
import AppStyles from '../../../ConstantStyles/Styles'
import GenericPreference from '../../../ConstantStyles/GenericPreference'
import React, { useState } from 'react'

function DietScreen ({ navigation }: { navigation: any }) {
  const [currentWeight, setCurrentWeight] = useState('')
  const [weightGoal, setWeightGoal] = useState('')
  const [calories, setCalories] = useState('')
  const [hydration, setHydration] = useState('')

  return (
    <DefaultPage title={'Diet Preferences'} navigation={navigation}>
      <View
        style={{
          marginHorizontal: '5%',
          alignContent: 'center',
          marginTop: '1%',
          flex: 1,
          justifyContent: 'center'
        }}
      >
        <View style={{ flex: 0.15 }} />
        <Text style={styles.Title}>Select Your Diet Type</Text>
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
          onSelectionChange={item => {
            console.log(item)
          }}
        />
        <View style={{ flex: 0.45, flexDirection: 'row', margin: 2.5 }}>
          <Text style={{ ...styles.Title, flex: 1 }}>
            Current Weight (lbs):{' '}
          </Text>
          <TextInput
            style={{ ...styles.input, flex: 0.15 }}
            placeholderTextColor={'#000000'}
            placeholder={'0'}
            inputMode='numeric'
            value={currentWeight}
            returnKeyType='done'
            onChangeText={text => {
              setCurrentWeight(text)
            }}
            cursorColor={'#000000'}
          />
        </View>
        <View
          style={{
            flex: 0.45,
            flexDirection: 'row',
            margin: 2.5,
            alignContent: 'center'
          }}
        >
          <Text style={{ ...styles.Title, flex: 1 }}>Goal Weight (lbs): </Text>
          <TextInput
            style={{ ...styles.input, flex: 0.15 }}
            placeholderTextColor={'#000000'}
            placeholder={'0'}
            returnKeyType='done'
            inputMode='numeric'
            value={weightGoal}
            onChangeText={text => {
              setWeightGoal(text)
            }}
            cursorColor={'#000000'}
          />
        </View>
        <View style={{ flex: 0.45 }} /> {/* spacer*/}
        <View style={{ flex: 0.45, flexDirection: 'row', margin: 2.5 }}>
          <Text style={{ ...styles.Title, flex: 1 }}>Daily Caloric Goal:</Text>
          <TextInput
            style={{ ...styles.input, flex: 0.15 }}
            placeholderTextColor={'#000000'}
            placeholder={'0'}
            inputMode='numeric'
            value={calories}
            returnKeyType='done'
            onChangeText={text => {
              setCalories(text)
            }}
            cursorColor={'#000000'}
          />
        </View>
        <View style={{ flex: 0.45, flexDirection: 'row', margin: 2.5 }}>
          <Text style={{ ...styles.Title, flex: 1 }}>
            Daily Hydration Goal (oz):
          </Text>
          <TextInput
            style={{ ...styles.input, flex: 0.15 }}
            placeholderTextColor={'#000000'}
            placeholder={'0'}
            inputMode='numeric'
            value={hydration}
            returnKeyType='done'
            onChangeText={text => {
              setHydration(text)
            }}
            cursorColor={'#000000'}
          />
        </View>
        <View style={{ flex: 0.45 }} /> {/* spacer*/}
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#42D951',
              borderRadius: 10,
              width: '100%',
              height: '100%',
              justifyContent: 'space-evenly',
              alignSelf: 'center',
              paddingHorizontal: 30,
              margin: 5
            }}
          >
            <Text style={AppStyles.sectionTitle}>Save</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.15 }} />
      </View>
    </DefaultPage>
  )
}

const styles = StyleSheet.create({
  Bubble: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#39c026'
  },
  input: {
    height: 'auto',
    width: '50%',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderColor: '#42D951',
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 8
  },
  Title: {
    color: '#000000',
    fontWeight: '500',
    fontSize: 16,
    fontFamily: 'Menlo',
    alignSelf: 'flex-start'
  }
})
export default DietScreen
