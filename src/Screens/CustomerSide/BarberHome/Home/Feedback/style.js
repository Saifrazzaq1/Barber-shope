// style.js

import {StyleSheet} from 'react-native';
import {heightRef, widthRef} from 'src/config/screenSize';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
  },
  text1: {
    color: '#1C3078',
    fontSize: 16,
    fontWeight: '500',
  },
  text3: {
    color: '#000',
    fontSize: 17,
    marginBottom: 3.5,
    fontWeight: '500',
  },
  text2: {
    color: '#1C3078',
    fontSize: 22,
    fontWeight: '600',
  },
  ratingView: {
    marginVertical: 5,
    marginLeft: 5,
    alignItems: 'flex-end',
  },
  feedbackV: {
    marginTop: 20,
  },
  input: {
    marginTop: -40,
  },
  checkbox: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  inputFieldView: {
    backgroundColor: 'white',
    borderRadius: 15,
    borderColor: '#1C3078',
    borderWidth: 2,
    elevation: 5,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 10 * widthRef,
    height: 160 * heightRef,
  },
});

export default styles;
