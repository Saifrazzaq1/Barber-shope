import {StyleSheet} from 'react-native';
import {heightRef} from 'src/config/screenSize';
import {widthRef} from 'src/config/screenSize';
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
  },

  barberTalent2: {
    fontWeight: '600',
    color: '#000',
    textAlign: 'left',
  },
  barberTalent4: {
    fontWeight: '500',
    color: '#575757',
    textAlign: 'left',
  },
  barberTalent1: {
    fontWeight: '500',
    textAlign: 'left',
    color: '#575757',
  },
  barberTalent0: {
    fontWeight: '600',
    textAlign: 'left',
    color: '#1C3078',
  },
  barberTalent: {
    fontWeight: '600',
    textAlign: 'left',
    color: '#000',
  },
  TH: {
    fontWeight: '600',
    textAlign: 'left',
    color: '#1C3078',
    fontSize: 24,
    marginBottom: 20,
  },
  addbtn: {
    position: 'absolute',
    bottom: -150,
    right: 25,
  },
  add: {
    position: 'absolute',
    bottom: -260,
    right: 20,
  },
  addimg: {
    height: 60,
    width: 60,
  },
});
export default styles;
