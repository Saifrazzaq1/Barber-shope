import {StyleSheet} from 'react-native';
import {heightRef, widthRef} from 'src/config/screenSize';

const styles = StyleSheet.create({
  card: {
    padding: 10,
    alignItem: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginRight: 10,
    marginVertical: 3,
    paddingVertical: 20,
  },
  image: {
    width: 30 * widthRef,
    height: 30 * heightRef,
    resizeMode: 'center',
    marginLeft: 10,
  },
  barberName: {
    fontWeight: '600',
    fontSize: 16,
  },
  barberName1: {
    fontSize: 13,
    textAlign: 'justify',
    marginBottom: 10,
    width: 30 * widthRef,
    height: 30 * heightRef,
  },
  barberNameTextView: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 10 * widthRef,
  },
  barberName: {},
});

export default styles;
