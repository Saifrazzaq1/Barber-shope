import {StyleSheet} from 'react-native';
import {heightRef} from 'src/config/screenSize';
import {widthRef} from 'src/config/screenSize';
const styles = StyleSheet.create({
  main: {
    flex: 1,
    // width: '100%',
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
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
  nameText1: {
    fontWeight: 'bold',
    letterSpacing: 1,
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 10,
  },
  barberTalent: {
    fontWeight: '400',
    textAlign: 'left',
  },
  barberTalent1: {
    marginBottom: 5,
    textAlign: 'left',
  },
  barberTalent2: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 25,
  },
  cardsStyle: {
    marginVertical: 20 * heightRef,
  },
  ReView: {
    backgroundColor: '#a0a0a0',
  },
});
export default styles;
