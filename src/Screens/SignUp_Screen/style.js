import {StyleSheet} from 'react-native';
import {heightRef} from 'src/config/screenSize';
import {widthRef} from 'src/config/screenSize';
export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'space-between',
  },
  Text: {
    color: '#1C3078',
    // textAlign: 'center',
    // fontWeight: 'bold',
    lineHeight: 30 * heightRef,
    letterSpacing: -0.5,

    fontSize: 16,
  },
  bottomText: {
    color: '#1C3078',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: -0.5,
    // backgroundColor: 'black',
  },
  Heading: {
    fontSize: 16,

    // lineHeight: 64,
    letterSpacing: -0.5,
    textAlign: 'left',
    color: '#1C3078',
    fontWeight: 'bold',
  },
  textContent: {
    color: '#1C3078',
    fontSize: 24,
    fontWeight: 'bold',
    // lineHeight: 64,
    letterSpacing: -0.5,
    textAlign: 'left',
  },
});
