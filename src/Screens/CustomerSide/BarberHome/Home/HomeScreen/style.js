import {StyleSheet} from 'react-native';
import {heightRef} from 'src/config/screenSize';
import {widthRef} from 'src/config/screenSize';
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingBottom: 100 * widthRef,
  },
  textView: {
    flex: 1,
  },
  headerText: {
    fontWeight: '600',
    lineHeight: 64,
    letterSpacing: -0.5,
    textAlign: 'left',
  },
  addbtn: {
    position: 'absolute',
    bottom: 220,
    right: 25,
  },
  add: {
    position: 'absolute',
    bottom: 130,
    right: 25,
  },
  addimg: {
    height: 60,
    width: 60,
  },
  card: {
    padding: 10,
    alignItem: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginRight: 10,
    marginVertical: 10,
  },
  cardText: {
    lineHeight: 26,
    letterSpacing: -0.5,
    textAlign: 'center',
  },
  servicesView: {
    flexDirection: 'row',
    backgroundColor: 'black',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    overflow: 'hidden',
  },
  hairCutServices: {
    flex: 1,
  },
  hairCutText: {
    fontWeight: '400',
    letterSpacing: -0.5,
    textAlign: 'left',
  },
  hairCutImage: {
    height: 80 * heightRef,
    width: 80 * widthRef,
    borderRadius: 50,
  },
  servicesRupees: {
    lineHeight: 64,
    letterSpacing: 0,
    textAlign: 'left',
  },
  servicesTime: {
    lineHeight: 26,
    letterSpacing: -0.5,
    textAlign: 'left',
  },
  image: {
    width: 45 * widthRef,
    height: 45 * heightRef,
    borderRadius: 50,
  },
  barberNameTextView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginHorizontal: 20 * widthRef,
  },
  barberName: {
    lineHeight: 26,
    letterSpacing: -0.5,
    textAlign: 'left',
  },
  faqQuestion: {
    marginBottom: 8,
    letterSpacing: -0.5,
    textAlign: 'left',
  },
  faqAnswer: {marginBottom: 30, textAlign: 'left'},
});

export default styles;
