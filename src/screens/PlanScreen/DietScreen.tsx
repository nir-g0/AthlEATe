import { useState } from 'react'
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions
} from 'react-native'
import DefaultPage from '../../components/generics/DefaultPage'
import DietPicker from '../../components/DietPicker'
import GenericPreference from '../../components/generics/GenericPreference'
import fonts from '../../styles/fonts'
import compStyles from '../../styles/compStyles'
import Spacer from '../../components/generics/Spacer'
import { LogBox } from 'react-native'

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state'
])
const { width, height } = Dimensions.get('window')

function DietScreen ({ navigation, route }: { navigation: any; route: any }) {
  const [currentWeight, setCurrentWeight] = useState('')
  const [weightGoal, setWeightGoal] = useState('')
  const [calories, setCalories] = useState('')
  const [hydration, setHydration] = useState('')
  const { onSave } = route.params

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
            placeholderTextColor={compStyles.themeGrey.color}
            placeholder={'0'}
            inputMode='numeric'
            value={currentWeight}
            returnKeyType='done'
            onChangeText={setCurrentWeight}
            cursorColor={compStyles.themeBrightGreen.color}
          />
        </View>
        <View style={compStyles.rowWhiteContainer}>
          <Text style={fonts.heading2}>Goal Weight (lbs):</Text>
          <TextInput
            style={inputStyle}
            placeholderTextColor={compStyles.themeGrey.color}
            placeholder={'0'}
            inputMode='numeric'
            value={weightGoal}
            returnKeyType='done'
            onChangeText={setWeightGoal}
            cursorColor={compStyles.themeBrightGreen.color}
          />
        </View>
        <View style={compStyles.rowWhiteContainer}>
          <Text style={[fonts.heading2, fonts.flex]}>Daily Caloric Goal:</Text>
          <TextInput
            style={inputStyle}
            placeholderTextColor={compStyles.themeGrey.color}
            placeholder={'0'}
            inputMode='numeric'
            value={calories}
            returnKeyType='done'
            onChangeText={setCalories}
            cursorColor={compStyles.themeBrightGreen.color}
          />
        </View>
        <View style={compStyles.rowWhiteContainer}>
          <Text style={[fonts.heading2]}>Daily Hydration Goal (oz):</Text>
          <TextInput
            style={inputStyle}
            placeholderTextColor={compStyles.themeGrey.color}
            placeholder={'0'}
            inputMode='numeric'
            value={hydration}
            returnKeyType='done'
            onChangeText={setHydration}
            cursorColor={compStyles.themeBrightGreen.color}
          />
        </View>
        <Spacer />

        <TouchableOpacity
          onPress={() => {
            onSave()
            navigation.pop()
          }}
          style={compStyles.bottomGreenButton}
        >
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
