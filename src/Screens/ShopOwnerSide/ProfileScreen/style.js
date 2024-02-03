import {StyleSheet} from 'react-native';
import {heightRef} from 'src/config/screenSize';
import {widthRef} from 'src/config/screenSize';
const styles = StyleSheet.create({
  main: {
    flex: 1,
    // width: '100%',
    backgroundColor: '#E5E5E5',

    padding: 10,
    marginBottom: 70 * widthRef,
  },
  textView: {
    flex: 1,
    // backgroundColor: 'red',
  },
  card: {
    padding: 10,
    // margin: 10,
    // backgroundColor: '#1C3078',
    alignItem: 'center',
    justifyContent: 'center',
    // textAlign: 'center',
    borderRadius: 20,
    marginRight: 10,
    marginVertical: 10,
    // width: '100%',
  },
  cardText: {
    // fontFamily:''
    // fontWeight: 600;
    lineHeight: 26,
    letterSpacing: -0.5,
    textAlign: 'center',
  },
  servicesView: {
    // flex: 1,
    flexDirection: 'row',
    backgroundColor: 'black',
    justifyContent: 'space-between',
    // width: 250 * widthRef,
    alignItems: 'flex-end',
    overflow: 'hidden',
    // height: 159 * heightRef,
  },
  hairCutServices: {
    // backgroundColor: 'black',
    flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  hairCutText: {
    fontWeight: '400',
    // lineHeight: 64,
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
    // backgroundColor: 'red',
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
    lineHeight: 64,
    letterSpacing: -0.5,
    textAlign: 'left',
  },
  faqAnswer: {letterSpacing: 0, textAlign: 'left'},
});

export default styles;
