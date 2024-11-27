import { useState } from 'react'
import { Dimensions, Alert, View } from 'react-native'
import { LineChart } from 'react-native-chart-kit'
import compStyles from '../styles/compStyles'

function Graph ({ data, setData }) {
  const [segments, setSegments] = useState(5)

  return (
    <LineChart
      data={{
        labels: data.map((d: { label: any }) => {
          return d.label
        }),
        datasets: [{ data: data.map((d: { value: any }) => d.value) }]
      }}
      fromZero
      segments={segments}
      yAxisInterval={1}
      verticalLabelRotation={45}
      width={Dimensions.get('window').width * 0.92}
      height={Dimensions.get('window').height / 2.75}
      yAxisLabel='Level '
      onDataPointClick={out => {
        let label = data.at(out.index)?.nonShorted
        Alert.prompt(
          `Set intensity level [0-10] for`,
          `${label}`,
          [
            {
              text: 'Cancel',
              style: 'cancel'
            },
            {
              text: 'OK',
              onPress: val => {
                const intValue = parseInt(val)
                if (!isNaN(intValue) && intValue >= 0 && intValue <= 10) {
                  setData((prevData: any[]) =>
                    prevData.map((item: any, idx: number) =>
                      idx === out.index ? { ...item, value: intValue } : item
                    )
                  )
                } else {
                  Alert.alert(
                    'Invalid input',
                    'Please enter a number between 0 and 10.'
                  )
                }
              }
            }
          ],
          'plain-text'
        )
      }}
      chartConfig={{
        backgroundColor: compStyles.themeWhite.color,
        backgroundGradientFrom: compStyles.themeWhite.color,
        backgroundGradientTo: compStyles.themeWhite.color,
        decimalPlaces: 0,
        color: (opacity = 1) => `rgba(46, 204, 113, 1)`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        propsForDots: {
          r: '6',
          strokeWidth: '0',
          stroke: '#FFFFFF'
        },
        propsForBackgroundLines: {
          strokeWidth: '.5',
          stroke: '#0F0F00'
        },
        strokeWidth: 2
      }}
      bezier
      style={{
        borderRadius: 10
      }}
    />
  )
}

export default Graph
