import {useState} from 'react'
import {Dimensions, Alert} from 'react-native'
import {LineChart} from 'react-native-chart-kit'

function Graph () {
  const [data, setData] = useState([
    {idx: 0, value: Math.random() * 10, label: 'Jan', nonShorted: 'January'},
    {idx: 1, value: Math.random() * 10, label: 'Feb', nonShorted: 'February'},
    {idx: 2, value: Math.random() * 10, label: 'Mar', nonShorted: 'March'},
    {idx: 3, value: Math.random() * 10, label: 'Apr', nonShorted: 'April'},
    {idx: 4, value: Math.random() * 10, label: 'May', nonShorted: 'May'},
    {idx: 5, value: Math.random() * 10, label: 'Jun', nonShorted: 'June'},
    {idx: 6, value: Math.random() * 10, label: 'Jul', nonShorted: 'July'},
    {idx: 7, value: Math.random() * 10, label: 'Aug', nonShorted: 'August'},
    {idx: 8, value: Math.random() * 10, label: 'Sep', nonShorted: 'September'},
    {idx: 9, value: Math.random() * 10, label: 'Oct', nonShorted: 'October'},
    {idx: 10, value: Math.random() * 10, label: 'Nov', nonShorted: 'November'},
    {idx: 11, value: Math.random() * 10, label: 'Dec', nonShorted: 'December'},
  ])
  return (
    <LineChart
      data={{
        labels: data.map(d => {
          return d.label
        }),
        datasets: [{data: data.map(d => d.value)}],
      }}
      fromZero
      segments={5}
      yAxisInterval={2}
      verticalLabelRotation={45}
      width={Dimensions.get('window').width * 0.95}
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
              style: 'cancel',
            },
            {
              text: 'OK',
              onPress: val => {
                const intValue = parseInt(val)
                if (!isNaN(intValue) && intValue >= 0 && intValue <= 10) {
                  setData(prevData =>
                    prevData.map((item, idx) =>
                      idx === out.index ? {...item, value: intValue} : item,
                    ),
                  )
                } else {
                  Alert.alert(
                    'Invalid input',
                    'Please enter a number between 0 and 10.',
                  )
                }
              },
            },
          ],
          'plain-text',
        )
      }}
      chartConfig={{
        backgroundColor: '#39c026',
        backgroundGradientFrom: '#FFFFFF',
        backgroundGradientTo: '#FFFFFF',
        decimalPlaces: 0,
        color: (opacity = 1) => `rgba(96, 227, 74, 1)`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        propsForDots: {
          r: '8',
          strokeWidth: '.31',
          stroke: '#39c026',
        },
        propsForBackgroundLines: {
          strokeWidth: '.5',
          stroke: '#0F0F00',
        },
        strokeWidth: 2,
      }}
      bezier
      style={{
        borderRadius: 10,
      }}
    />
  )
}

export default Graph
