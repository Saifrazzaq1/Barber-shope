import {StyleSheet} from 'react-native';
import {heightRef} from 'src/config/screenSize';
import {widthRef} from 'src/config/screenSize';
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingBottom: 100 * heightRef,
    paddingHorizontal: 20 * heightRef,
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
    letterSpacing: 0,
    marginBottom: 10,
    textAlign: 'left',
  },
  barberTalent: {
    fontWeight: '400',
    letterSpacing: -0.5,
    textAlign: 'left',
  },
  cardsStyle: {
    marginVertical: 20 * heightRef,
  },
});
export default styles;
