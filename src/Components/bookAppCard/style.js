import {Platform, StyleSheet} from 'react-native';
import {heightRef} from 'src/config/screenSize';
import {widthRef} from 'src/config/screenSize';
const styles = StyleSheet.create({
  header: {
    fontWeight: '600',
    lineHeight: 67,
    letterSpacing: -0.5,
    textAlign: 'left',
  },
  card: {
    padding: 10,
    // margin: 10,
    marginVertical: 10 * heightRef,
    // backgroundColor: '#1C3078',

    alignItem: 'center',
    justifyContent: 'center',
    // textAlign: 'center',
    borderRadius: 20,
    width: '100%',
  },
  dateText: {
    // fontFamily:
    //   Platform.OS === 'android' ? 'Montserrat-Regular' : 'Montserrat Regular',
    fontWeight: '400',
    // lineHeight: 64,
    letterSpacing: -0.5,
    textAlign: 'left',
  },
  timeText: {
    fontWeight: '600',
    lineHeight: 64,
    letterSpacing: 0,
    textAlign: 'left',
  },
  messageText: {
    fontWeight: '400',
    // lineHeight: 26,
    letterSpacing: -0.5,
    textAlign: 'left',
  },
  image: {
    width: 45 * widthRef,
    height: 45 * heightRef,
    borderRadius: 50,
  },
  barberNameView: {
    flexDirection: 'row',
    // backgroundColor: 'black',
    // flex: 1,
    // justifyContent: '',
    alignItems: 'flex-start',
    width: 186 * widthRef,
    paddingHorizontal: 12 * widthRef,
  },
  barberName: {
    // lineHeight: 26,
    letterSpacing: -0.5,
    textAlign: 'left',
    marginHorizontal: 2 * widthRef,
    // justifyContent: 'space-between',
    // alignContent: 'center',
    // textAlign: 'center',
  },
  barberPayment: {
    // lineHeight: 63.5,
    letterSpacing: -0.5,
    textAlign: 'left',
    marginHorizontal: 2 * widthRef,
  },
  cancelAppointment: {
    // font-size: 19px;
    fontWeight: '400',
    lineHeight: 26,
    letterSpacing: -0.5,
    textAlign: 'left',

    // font-family: Montserrat-Regular;
    // font-size: 13px;
    // font-weight: 400;
    // line-height: 26px;
    // letter-spacing: -0.5px;
    // text-align: left;
  },
});
export default styles;
