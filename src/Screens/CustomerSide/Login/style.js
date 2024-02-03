import {StyleSheet} from 'react-native';
import {heightRef} from 'src/config/screenSize';
import {widthRef} from 'src/config/screenSize';
export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  Text: {
    color: '#1C3078',
    lineHeight: 30 * heightRef,
    letterSpacing: -0.5,
    fontSize: 16,
  },
  bottomText: {
    color: '#1C3078',
    textAlign: 'center',
    fontWeight: 'bold',
    opacity: 0.5,
    fontSize: 16,
    letterSpacing: -0.5,
  },
  headingIcon2: {
    paddingVertical: 20 * heightRef,
  },
  imageIcon2: {
    resizeMode: 'contain',
    height: 25 * heightRef,
    width: 25 * widthRef,
  },
});
