import {StyleSheet} from 'react-native';
import {heightRef} from 'src/config/screenSize';
import {widthRef} from 'src/config/screenSize';
export default StyleSheet.create({
  button: {marginTop: 10, padding: 10, justifyContent: 'center'},
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: -0.5,
    textAlign: 'center',
  },
});
