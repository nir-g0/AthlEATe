import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen.tsx'
import PlanScreen from './screens/PlanScreen/PlanScreen.tsx'
import TrackScreen from './screens/TrackScreen/TrackScreen.tsx'
import MealsScreen from './screens/MealsScreen.tsx'
import ScanScreen from './screens/ScanScreen.tsx'
import DefaultTitle from './components/generics/DefaultTitle.tsx'
import Diet from './screens/PlanScreen/DietScreen.tsx'
import TimingScreen from './screens/PlanScreen/TimingScreen.tsx'
import SportScreen from './screens/PlanScreen/SportScreen.tsx'

const Stack = createNativeStackNavigator()

const PageOption = {
  headerBackTitle: 'Back',
  headerBackTitleStyle: { fontFamily: 'Menlo' },
  headerTitle: () => <DefaultTitle />,
  headerTransparent: true
}

const Preference = {
  ...PageOption,
  headerBackTitle: 'Cancel'
}

function App (): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animation: 'fade_from_bottom', // Set fade animation for all screens
          animationDuration: 150
        }}
      >
        <Stack.Screen options={PageOption} name='Home' component={HomeScreen} />
        <Stack.Screen options={PageOption} name='Plan' component={PlanScreen} />
        <Stack.Screen options={Preference} name='Diet' component={Diet} />
        <Stack.Screen
          options={Preference}
          name='Sport'
          component={SportScreen}
        />
        <Stack.Screen
          options={Preference}
          name='Timing'
          component={TimingScreen}
        />
        <Stack.Screen
          options={PageOption}
          name='Track'
          component={TrackScreen}
        />
        <Stack.Screen
          options={PageOption}
          name='Meals'
          component={MealsScreen}
        />
        <Stack.Screen options={PageOption} name='Scan' component={ScanScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
