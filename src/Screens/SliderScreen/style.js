import {StyleSheet} from 'react-native';
import {heightRef, widthRef} from 'src/config/screenSize';

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '70%',
    backgroundColor: 'white',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  image: {
    width: '100%',
    height: '83%',
    marginTop: 98 * heightRef,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  imagef: {
    width: '100%',
    height: '99%',
    marginTop: 6 * heightRef,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  main1: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    marginTop: 45 * heightRef,
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15 * heightRef,
  },
  textview: {
    width: 301 * widthRef,
    height: 59 * heightRef,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    width: 305 * widthRef,
    height: 52 * heightRef,
    textAlign: 'center',
  },
  dot: {
    flexDirection: 'row',
    top: 540 * heightRef,
    left: '40%',
    position: 'absolute',
  },
  last: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnview: {
    width: 65 * widthRef,
    height: 65 * widthRef,
    borderRadius: 50,
    backgroundColor: '#1C3078',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50 * heightRef,
    paddingLeft: 5,
  },
  flex: {flex: 1},
});

export default styles;
