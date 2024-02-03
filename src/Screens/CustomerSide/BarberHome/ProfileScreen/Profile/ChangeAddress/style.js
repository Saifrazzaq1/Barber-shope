import {StyleSheet} from 'react-native';
import {heightRef} from 'src/config/screenSize';
import {widthRef} from 'src/config/screenSize';
export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'space-between',
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
  Text: {
    color: '#1C3078',
    lineHeight: 30 * heightRef,
    letterSpacing: -0.5,
    fontSize: 16,
  },
  pp: {
    fontSize: 22,
    fontWeight: '700',
    // position: 'absolute',
    // left: -188,
    // top: 40,
  },
  p1: {
    fontSize: 16,
    fontWeight: '500',
  },
  imageIcon2: {
    resizeMode: 'contain',
    height: 25 * heightRef,
    width: 25 * widthRef,
  },
  bottomText: {
    color: '#1C3078',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: -0.5,
  },
  Heading: {
    fontSize: 16,
    letterSpacing: -0.5,
    textAlign: 'left',
    color: '#1C3078',
    fontWeight: 'bold',
  },
  textContent: {
    color: '#1C3078',
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: -0.5,
    textAlign: 'left',
  },
  pictureView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 150 * heightRef,
    alignItems: 'center',
  },
  subPictureView: {},
  picture: {
    borderRadius: 50 * heightRef + widthRef,
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
  imagev: {
    height: 150 * heightRef,
    width: 150 * widthRef,
    backgroundColor: '#C4C4C4',
    borderRadius: 10,
    overflow: 'hidden',
  },
  img: {
    height: 150 * heightRef,
    width: 150 * widthRef,
  },
  imgview: {height: 50, marginTop: 20},
});
