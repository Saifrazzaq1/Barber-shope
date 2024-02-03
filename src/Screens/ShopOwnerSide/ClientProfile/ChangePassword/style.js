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
    opacity: 0.5,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: -0.5,
  },
  headingIcon2: {
    backgroundColor: '#fff',
    paddingVertical: 20 * heightRef,
  },
  Text: {
    color: '#1C3078',
    lineHeight: 30 * heightRef,
    letterSpacing: -0.5,
    fontSize: 16,
  },
  imageIcon2: {
    resizeMode: 'contain',
    height: 25 * heightRef,
    width: 25 * widthRef,
  },
  Text: {
    color: '#1C3078',
    lineHeight: 30 * heightRef,
    letterSpacing: -0.5,
    fontSize: 16,
  },
  Heading: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'left',
    color: '#1C3078',
  },
  textContent: {
    color: '#1C3078',
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'left',
    marginBottom: 20,
  },
});
