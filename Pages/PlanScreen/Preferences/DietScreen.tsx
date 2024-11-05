import {
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import DefaultPage from '../../../ConstantStyles/DefaultPage'
import DietPicker from './DietType/DietPicker'
import AllergyPicker from './DietType/AllergyPicker'
import FoodPicker from './DietType/FoodPicker'
import AppStyles from '../../../ConstantStyles/Styles'

function DietScreen ({ navigation }: { navigation: any }) {
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
        <Text style={styles.Title}>Select Your Diet Type</Text>
        <DietPicker />
        <Text style={styles.Title}>Add Food Allergens</Text>
        <AllergyPicker />
        <Text style={styles.Title}>Other Food Preferences</Text>
        <FoodPicker />
        <View style={{ height: '50%' }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#42D951',
              borderRadius: 10,
              width: '100%',
              height: '10%',
              justifyContent: 'center',
              alignSelf: 'center',
              paddingHorizontal: 30,
              margin: 5
            }}
          >
            <Text style={AppStyles.sectionTitle}>Save</Text>
          </TouchableOpacity>
        </View>
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
  Title: {
    color: '#000000',
    fontWeight: '400',
    fontSize: 16,
    fontFamily: 'Menlo',
    alignSelf: 'flex-start'
  }
})
export default DietScreen
