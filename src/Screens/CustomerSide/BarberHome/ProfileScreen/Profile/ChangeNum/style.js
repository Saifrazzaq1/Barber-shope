import {StyleSheet} from 'react-native';
import {heightRef} from 'src/config/screenSize';
import {widthRef} from 'src/config/screenSize';
export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
  },
  Text: {
    color: '#1C3078',
    lineHeight: 30 * heightRef,
    letterSpacing: -0.5,

    fontSize: 16,
  },
  headingIcon2: {
    paddingVertical: 20 * heightRef,
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
  pictureView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'black',
    height: 150 * heightRef,
  },
  subPictureView: {justifyContent: 'flex-end'},
  picture: {
    borderRadius: 50 * heightRef + widthRef,
    // backgroundColor: 'grey',
    backgroundColor: '#C4C4C4',

    width: 100 * widthRef,
    height: 100 * heightRef,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    alignSelf: 'stretch',
  },
  pictureButton: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
