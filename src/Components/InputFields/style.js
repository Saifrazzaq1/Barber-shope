import {StyleSheet} from 'react-native';
import {heightRef} from 'src/config/screenSize';
import {widthRef} from 'src/config/screenSize';
export default StyleSheet.create({
  inputFieldView: {
    backgroundColor: 'white',
    borderRadius: 20,
    borderColor: '#1C3078',
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10 * widthRef,
    height: 60 * heightRef,
  },
  InputField: {color: 'black', flex: 1},
  Heading: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 20,
    letterSpacing: -0.5,
    textAlign: 'left',
    color: '#1C3078',
    fontWeight: '500',
  },
  textContent: {
    color: '#1C3078',
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: -0.5,
    marginBottom: 10,
    textAlign: 'left',
  },
});
