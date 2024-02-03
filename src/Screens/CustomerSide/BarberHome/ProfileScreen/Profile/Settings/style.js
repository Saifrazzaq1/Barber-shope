import {StyleSheet} from 'react-native';
import {heightRef} from 'src/config/screenSize';
import {widthRef} from 'src/config/screenSize';
const styles = StyleSheet.create({
  main: {
    flex: 1,
    // width: '100%',
    backgroundColor: '#E5E5E5',
    padding: 10,
  },
  profile: {
    width: '100%',
    flexDirection: 'row',
  },
  profileImage: {
    width: 100 * widthRef,
    height: 100 * heightRef,
    borderRadius: 50,
  },
  profileInfo: {
    // backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10 * widthRef,
  },
  nameText: {
    fontWeight: '600',
    lineHeight: 64,
    letterSpacing: 0,
    textAlign: 'left',
  },
  barberTalent: {
    fontWeight: '400',
    // lineHeight: 64,
    letterSpacing: -0.5,
    textAlign: 'left',
  },
  cardsStyle: {
    marginVertical: 20 * heightRef,
  },
});
export default styles;
