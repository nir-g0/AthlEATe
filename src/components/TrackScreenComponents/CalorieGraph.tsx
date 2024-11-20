import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native'
import { LineChart } from 'react-native-chart-kit'
import compStyles from '../../styles/compStyles'
import fonts from '../../styles/fonts'

const screenWidth = Dimensions.get('window').width

const CalorieGraph = () => {
  const [view, setView] = useState('daily') // Default view

  // Sample data
  const data = {
    daily: [1800, 2000, 1700, 2200, 1900, 2100, 2000],
    monthly: [60000, 61000, 59000, 62000, 61500, 60000, 60500]
  }

  const labels = {
    daily: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],

    monthly: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
  }

  return (
    <View>
      <Text style={fonts.heading1}>⛽Caloric Intake⛽</Text>

      {/* Line Chart */}
      <LineChart
        data={{
          labels: labels[view],
          datasets: [{ data: data[view] }]
        }}
        width={screenWidth * 0.95} // Full width minus padding
        height={screenWidth * 0.5}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 0,
          color: (opacity = 1) => `#39c026`, // Blue
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: '4',
            strokeWidth: '2',
            stroke: '#39c026'
          }
        }}
        bezier
      />

      {/* View Toggle */}
      <View style={compStyles.rowWhiteContainer}>
        {['daily', 'monthly'].map(item => (
          <TouchableOpacity
            key={item}
            style={[compStyles.bubble, view === item && styles.activeButton]}
            onPress={() => setView(item)}
          >
            <Text
              style={[
                styles.toggleButtonText,
                view === item && styles.activeButtonText
              ]}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  chart: {
    marginVertical: 20,
    borderRadius: 16
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 10
  },
  toggleButton: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#f0f0f0'
  },
  activeButton: {
    backgroundColor: '#42D951'
  },
  toggleButtonText: {
    color: '#000',
    fontWeight: 'bold'
  },
  activeButtonText: {
    color: '#fff'
  }
})

export default CalorieGraph
