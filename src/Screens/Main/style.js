import {StyleSheet} from 'react-native';
import {heightRef} from 'src/config/screenSize';
import {widthRef} from 'src/config/screenSize';
export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  // round: {
  //   height: 70 * heightRef,
  //   width: 70 * widthRef,
  //   backgroundColor: 'white',
  // },
  content: {
    height: 600 * heightRef,
  },
  wrapper: {
    // height: 500 * heightRef,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'grey',
    // elevation: 100,
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 20,
    flex: 1,
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#92BBD9',
    // elevation: 50,
    // elevation: 20,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    // elevation: 20,
  },
  body: {
    width: '100%',
    height: '100%',
    // backgroundColor: 'red',
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20,
    // justifyContent: 'space-around',
    alignItems: 'center',
  },
  headerImage: {
    width: 20 * widthRef,
    height: 20 * heightRef,
  },
  header: {
    width: 300 * widthRef,
    // backgroundColor: 'yellow',
  },
  text: {
    fontSize: 24,

    fontWeight: 'bold',
    lineHeight: 64,
    letterSpacing: -0.5,
    textAlign: 'center',
    color: '#1C3078',
  },
  textContent: {
    fontSize: 16,
    // fontWeight: 400;
    lineHeight: 26,
    letterSpacing: -0.5,
    textAlign: 'center',
    color: 'black',
  },
  icon: {marginTop: 50},
});
