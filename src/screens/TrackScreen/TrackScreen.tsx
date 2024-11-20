import React, { useState } from 'react'
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from 'react-native'

import DefaultPage from '../../components/generics/DefaultPage'

import DailyInsights from '../../components/TrackScreenComponents/DailyInsights'
import CalorieGraph from '../../components/TrackScreenComponents/CalorieGraph'
import PlanButton from '../../components/PlanButton'

const { width, height } = Dimensions.get('window')

function TrackScreen ({ navigation }: { navigation: any }): React.JSX.Element {
  const [tracking, setTracking] = useState(false)

  // Example data for the graph (calories over a week)

  const user = 'Athlete'
  return (
    <DefaultPage navigation={navigation} title='Track'>
      <ScrollView>
        <DailyInsights />
        <CalorieGraph />
        <TouchableOpacity
          onLongPress={() => {
            console.log('cheese')
          }}
        >
          <PlanButton title={'Nutrition Trends'} expand={'Open'}></PlanButton>
        </TouchableOpacity>
        <PlanButton title={'Weight'} expand={'Open'}></PlanButton>
        <PlanButton title={'Personal Metrics'} expand={'Open'}></PlanButton>
      </ScrollView>
    </DefaultPage>
  )
}

export default TrackScreen
