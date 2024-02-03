import {StyleSheet} from 'react-native';
import {heightRef} from 'src/config/screenSize';
export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  iconView: {backgroundColor: 'red'},
  HeaderText: {
    letterSpacing: -0.5,
    textAlign: 'left',
    color: '#1C3078',
  },
  OtpInputFields: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  imageView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  image: {},
  bottomText: {
    color: '#1C3078',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: -0.5,
  },
  Text: {
    color: '#0E0E0E',
    textDecorationLine: 'underline',
    marginBottom: 20,
    lineHeight: 30 * heightRef,

    fontSize: 14,
  },
  iconView: {},
});
