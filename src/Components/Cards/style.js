import {Platform, StyleSheet} from 'react-native';
import {fontRef, heightRef} from 'src/config/screenSize';
import {widthRef} from 'src/config/screenSize';
const styles = StyleSheet.create({
  header: {
    fontWeight: '600',
    textAlign: 'left',
    marginTop: 20,
    marginBottom: 10,
  },
  card: {
    paddingHorizontal: 20,
    borderRadius: 20,
    width: '100%',
    paddingVertical: 20,
  },
  dateText: {
    textAlign: 'left',
  },
  timeText: {
    letterSpacing: 0,
    textAlign: 'left',
  },
  messageText: {
    fontWeight: '400',
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
    alignItems: 'flex-start',
    width: 186 * widthRef,
    paddingHorizontal: 12 * widthRef,
  },
  barberName: {
    textAlign: 'left',
    marginHorizontal: 2 * widthRef,
  },
  barberPayment: {
    color: '#fff',
    fontSize: 20,
  },
  cancelAppointment: {
    fontSize: 10 * fontRef,
    alignSelf: 'center',
  },
});
export default styles;
