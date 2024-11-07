import { Text, View } from 'react-native'
import DefaultPage from '../../../ConstantStyles/DefaultPage'
import GenericPreference from '../../../ConstantStyles/GenericPreference'

function SportsScreen ({ navigation }) {
  return (
    <DefaultPage title={'Sport Specific Preferences'} navigation={navigation}>
      <View
        style={{
          marginHorizontal: '5%',
          alignContent: 'center',
          marginTop: '1%',
          flex: 1,
          justifyContent: 'center',
          alignSelf: 'flex-start'
        }}
      >
        <GenericPreference
          title={'Other Food Preferences'}
          placeholder={'Add here...'}
          buttonText={'Add'}
          selectedItems={[]}
          onSelectionChange={item => {
            console.log(item)
          }}
        />
      </View>
    </DefaultPage>
  )
}
export default SportsScreen
