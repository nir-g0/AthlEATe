import { Dimensions, StyleSheet } from 'react-native'
const { width, height } = Dimensions.get('screen')
const shadow = {
  shadowOpacity: 0.25,
  shadowRadius: 2,
  shadowOffset: { width: 0, height: 1 },
  shadowColor: '#000'
}
export default StyleSheet.create({
  pageContainer: {
    paddingBottom: height * 0.02,
    marginHorizontal: '5%',
    flex: 1
  },
  spacer: { height: height * 0.05 },
  shadow: { ...shadow },
  whiteContainer: {
    backgroundColor: '#ffffff',
    borderRadius: width * 0.03, // Responsive border radius
    padding: width * 0.04,
    marginVertical: height * 0.005,
    marginHorizontal: '2.5%',
    alignItems: 'center',
    alignSelf: 'center',
    width: 'auto',
    ...shadow
  },
  rowWhiteContainer: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: width * 0.03, // Responsive border radius
    padding: width * 0.04,
    marginVertical: height * 0.005,
    marginHorizontal: '2.5%',
    alignItems: 'center',
    alignSelf: 'center',
    width: 'auto'
  },
  rowContainerLong: {
    flexDirection: 'row',
    marginVertical: '1%',
    backgroundColor: '#FFF',
    borderRadius: width * 0.04,
    padding: '3%',
    width: '95%',
    alignSelf: 'center',
    ...shadow
  },
  longButton: {
    marginHorizontal: '2.5%',
    borderRadius: width * 0.05,
    paddingVertical: height * 0.02,
    alignItems: 'center',
    marginTop: height * 0.02,
    ...shadow
  },
  bubble: {
    borderRadius: width * 0.04,
    justifyContent: 'center',
    padding: width * 0.025
  },
  circle: {
    width: width * 0.12,
    height: width * 0.12,
    alignItems: 'center',

    justifyContent: 'center',
    borderRadius: width * 0.075,
    marginHorizontal: width * 0.015,
    ...shadow
  },
  themeBrightGreen: {
    color: '#3fc380',
    backgroundColor: '#3fc380'
  },
  themeGrey: {
    backgroundColor: '#BBBBBB',
    color: '#BBBBBB'
  },
  themeWhite: {
    backgroundColor: '#F8F9F9',
    color: '#F8F9F9'
  }
})
