import { Dimensions, StyleSheet } from 'react-native'
const appFont = 'Menlo'
const { width, height } = Dimensions.get('screen')
export default StyleSheet.create({
  heading1: {
    fontFamily: appFont,
    color: '#000000',
    fontSize: width * 0.05,
    fontWeight: '600'
  },
  heading2: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    color: '#111',
    marginVertical: height * 0.012,
    marginLeft: width * 0.02,
    fontFamily: appFont,
    flex: 1,
    alignSelf: 'flex-start'
  },
  greyText: {
    fontSize: width * 0.04,
    color: '#333',
    fontFamily: appFont,
    flex: 1
  },
  greyTextSmall: {
    fontSize: width * 0.04,
    color: '#666',
    fontFamily: 'Menlo',
    alignSelf: 'flex-start'
  },
  text: { fontSize: width * 0.04, fontFamily: appFont, alignSelf: 'center' },
  whiteText: {
    color: 'white',
    fontSize: width * 0.042,
    fontFamily: appFont,
    marginTop: 3,
    alignSelf: 'center'
  },
  whiteTextBold: {
    color: 'white',
    fontSize: 24,
    fontFamily: appFont,
    fontWeight: '600',
    alignSelf: 'center'
  }
})
