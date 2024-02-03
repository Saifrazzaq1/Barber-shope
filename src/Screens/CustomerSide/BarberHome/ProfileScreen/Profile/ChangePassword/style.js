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
    fontSize: 16,
    letterSpacing: -0.5,
  },
  headingIcon2: {
    backgroundColor: '#fff',
    paddingVertical: 30 * heightRef,
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
  maintext: {
    letterSpacing: -0.5,
    textAlign: 'left',
    color: '#1C3078',
  },

  otpContainer: {
    width: '100%',
  },
  otpInput: {
    borderRadius: 20,
    height: 65 * heightRef,
    width: 45 * widthRef,
    borderWidth: 2,
  },
  term: {
    color: '#0E0E0E',
    textDecorationLine: 'underline',
    fontSize: 14,
    marginTop: -60,
  },
  imageView: {
    alignItems: 'center',
    height: 400,
  },
  img: {
    height: 400 * heightRef,
    width: 400 * widthRef,
    marginTop: 5,
  },
});
