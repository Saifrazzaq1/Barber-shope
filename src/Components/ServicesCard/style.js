import {Platform, StyleSheet} from 'react-native';
import {heightRef} from 'src/config/screenSize';
import {widthRef} from 'src/config/screenSize';
const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 20 * widthRef,
    marginVertical: 10,
    marginRight: 20,
    paddingBottom: 15 * heightRef,
    alignItem: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    paddingTop: 15 * heightRef,
  },
  servicesView: {
    paddingVertical: 20,
    flexDirection: 'row',
    backgroundColor: 'black',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    overflow: 'hidden',
    marginRight: 20,
  },
  hairCutServices: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  hairCutText: {
    fontWeight: '400',
    marginRight: 10,
    letterSpacing: -0.5,
    textAlign: 'left',
  },
  hairCutImage: {
    height: 80 * heightRef,
    width: 80 * widthRef,
    borderRadius: 50,
  },
  servicesRupees: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: -20,
  },
  headerTextAll: {
    textAlign: 'right',
    fontWeight: '600',
    lineHeight: 64,
    letterSpacing: -0.5,
    textDecorationLine: 'underline',
  },
  servicesTime: {
    textAlign: 'left',
  },
  servicesTime1: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  headerText: {
    marginTop: 20,
    fontWeight: '600',
    letterSpacing: -0.5,
    textAlign: 'left',
  },
  headerTextAll: {
    textAlign: 'right',
    fontWeight: '600',
    lineHeight: 64,
    letterSpacing: -0.5,
    textDecorationLine: 'underline',
  },
  headerTextAll: {
    // lineHeight: 64,
    letterSpacing: 0,
    textAlign: 'right',
    textDecorationLine: 'underline',
  },
  textContent: {
    lineHeight: 15,
    letterSpacing: -0.5,
    textAlign: 'left',
    width: 225 * widthRef,
  },
});
export default styles;
