const {StyleSheet} = require('react-native');
import {heightRef} from 'src/config/screenSize';
import {widthRef} from 'src/config/screenSize';
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  body: {
    flex: 1,
    paddingHorizontal: 24 * widthRef,
  },
  card: {
    paddingVertical: 10 * heightRef,
    paddingHorizontal: 24 * widthRef,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 20,
    marginBottom: 6,
    backgroundColor: '#F5F5F5',
    flexDirection: 'row',
  },
  card1: {
    paddingVertical: 10 * heightRef,
    paddingHorizontal: 24 * widthRef,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 20,
    marginBottom: 6,
    backgroundColor: '#1C3078',
    flexDirection: 'row',
  },
  headerText: {
    fontWeight: '600',
    lineHeight: 64,
    letterSpacing: -0.5,
    textAlign: 'left',
  },
  headerTextAll: {
    textAlign: 'right',
    fontWeight: '600',
    letterSpacing: -0.5,
    textDecorationLine: 'underline',
  },
  image: {
    width: 45 * widthRef,
    height: 45 * heightRef,
    borderRadius: 50,
    marginRight: 10,
  },
  barberNameTextView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginHorizontal: 20 * widthRef,
  },
  text: {
    color: 'white',
  },
  text1: {
    color: '#1C3078',
  },
});
export default styles;
