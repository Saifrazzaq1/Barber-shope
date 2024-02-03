import {StyleSheet} from 'react-native';
import {heightRef} from 'src/config/screenSize';
import {widthRef} from 'src/config/screenSize';
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingBottom: 110 * heightRef,
  },
  card: {
    padding: 10,
    backgroundColor: '#F5F5F5',
    alignItem: 'center',
    justifyContent: 'center',
    // textAlign: 'center',
    borderRadius: 15,
    marginRight: 10,
    marginVertical: 10,
    width: '100%',
    // width: '100%',
  },
  heading: {
    // font-family: Montserrat-Regular;
    // font-size: 18px;
    fontWeight: '600',
    lineHeight: 26,
    letterSpacing: -0.5,
    textAlign: 'left',
  },
  cardText: {
    //   font-family: Montserrat-Regular;
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: -0.5,
    textAlign: 'left',
  },
});
export default styles;
