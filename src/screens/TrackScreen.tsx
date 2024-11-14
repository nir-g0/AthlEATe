import React, { useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView
} from 'react-native'
import { LineChart } from 'react-native-chart-kit'
import AppStyles from '../styles/Styles'
import DefaultPage from '../components/generics/DefaultPage'
import compStyles from '../styles/compStyles'
import fonts from '../styles/fonts'

const { width, height } = Dimensions.get('window')

function TrackScreen ({ navigation }: { navigation: any }): React.JSX.Element {
  const [tracking, setTracking] = useState(false)

  // Example data for the graph (calories over a week)
  const calorieData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [2000, 2100, 2200, 2300, 2100, 2200, 2500],
        color: () => `#39c026` // Optional color for the line
      }
    ]
  }

  return (
    <DefaultPage navigation={navigation} title='Track'>
      <ScrollView>
        <View style={[compStyles.whiteContainer, compStyles.themeBrightGreen]}>
          <Text style={fonts.whiteText}>Calories Today</Text>
          <Text style={fonts.whiteTextBold}>0 Cal</Text>
        </View>

        {/* Daily Hydration Tracker */}
        <View style={[compStyles.whiteContainer, compStyles.themeBrightGreen]}>
          <Text style={fonts.whiteText}>Daily Hydration</Text>
          <Text style={fonts.whiteTextBold}>0 oz</Text>
        </View>
        <Text style={fonts.heading2}>Weekly Calorie Intake</Text>
        <LineChart
          data={calorieData}
          width={width * 0.9}
          height={height * 0.3}
          yAxisSuffix=' Cal'
          chartConfig={{
            backgroundColor: '#FFF',
            backgroundGradientFrom: '#FFF',
            backgroundGradientTo: '#FFF',
            decimalPlaces: 0,
            color: () => '#39c026',
            labelColor: () => '#666',
            propsForDots: {
              r: '5',
              strokeWidth: '2',
              stroke: '#39c026'
            }
          }}
          bezier
          style={styles.chart}
        />
      </ScrollView>
    </DefaultPage>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: height * 0.02
  },
  statBox: {
    backgroundColor: '#F5F5F5',
    width: '90%',
    paddingVertical: height * 0.02,
    borderRadius: width * 0.03,
    alignItems: 'center',
    marginVertical: height * 0.02,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 }
  },
  statTitle: {
    fontSize: width * 0.05,
    fontWeight: '600',
    color: '#333',
    fontFamily: 'Menlo',
    marginBottom: height * 0.005
  },
  statValue: {
    fontSize: width * 0.08,
    fontWeight: 'bold',
    color: '#39c026',
    fontFamily: 'Menlo'
  },
  chartTitle: {
    fontSize: width * 0.05,
    fontWeight: '600',
    color: '#333',
    fontFamily: 'Menlo',
    marginTop: height * 0.02
  },
  chart: {
    borderRadius: width * 0.03,
    marginVertical: height * 0.02
  },
  trackButton: {
    width: '90%',
    paddingVertical: height * 0.02,
    borderRadius: width * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height * 0.03,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 }
  },
  startButton: {
    backgroundColor: '#42D951'
  },
  stopButton: {
    backgroundColor: '#FF5C5C'
  },
  trackButtonText: {
    color: '#FFF',
    fontSize: width * 0.045,
    fontWeight: '600',
    fontFamily: 'Menlo'
  }
})

export default TrackScreen
