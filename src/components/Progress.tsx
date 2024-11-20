import { Dimensions, View } from 'react-native'
import { ProgressChart } from 'react-native-chart-kit'
import compStyles from '../styles/compStyles'
const width = Dimensions.get('screen').width
function Progress ({
  prog,
  prog1 = 0,
  prog2 = 0
}: {
  prog: number
  prog1: number
  prog2: number
}) {
  return (
    <View style={compStyles.rowWhiteContainer}>
      <ProgressChart
        data={[prog2, prog1, prog]}
        width={width * 0.8}
        height={width * (4 / 5)}
        strokeWidth={width / 12}
        radius={width / 8.5}
        chartConfig={{
          backgroundGradientFrom: '#FFF',
          backgroundGradientTo: '#FFF',
          color: (opacity = 1) => `rgba(10, 214, 38, ${opacity})`
        }}
        hideLegend={true}
      />
    </View>
  )
}
export default Progress
