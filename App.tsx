/**
 * Icons from: <a href="https://www.flaticon.com/free-icons/planning" title="planning icons">Planning icons created by Freepik - Flaticon</a>
 * <a href="https://www.flaticon.com/free-icons/progress" title="progress icons">Progress icons created by lalawidi - Flaticon</a>
 * <a href="https://www.flaticon.com/free-icons/ui" title="ui icons">Ui icons created by HJ Studio - Flaticon</a>
 */

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './Pages/HomeScreen'
import PlanScreen from './Pages/PlanScreen/PlanScreen'
import TrackScreen from './Pages/TrackScreen'
import MealsScreen from './Pages/MealsScreen'
import ScanScreen from './Pages/ScanScreen'
import DefaultTitle from './ConstantStyles/DefaultTitle'
import Diet from './Pages/PlanScreen/Preferences/DietScreen'
import BudgetScreen from './Pages/PlanScreen/Preferences/BudgetScreen'
import NutritionScreen from './Pages/PlanScreen/Preferences/NutritionScreen'
import SportsScreen from './Pages/PlanScreen/Preferences/SportSpecificsScreen'
import TimingScreen from './Pages/PlanScreen/Preferences/TimingScreen'

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
          name='Budget'
          component={BudgetScreen}
        />
        <Stack.Screen
          options={Preference}
          name='Nutrition'
          component={NutritionScreen}
        />
        <Stack.Screen
          options={Preference}
          name='Sport'
          component={SportsScreen}
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
