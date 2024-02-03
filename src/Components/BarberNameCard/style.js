import {StyleSheet} from 'react-native';
import {heightRef, widthRef} from 'src/config/screenSize';

const styles = StyleSheet.create({
  card: {
    paddingVertical: 10 * heightRef,
    paddingHorizontal: 24 * widthRef,
    alignItem: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginBottom: 6,
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
  },
  barberNameTextView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginHorizontal: 20 * widthRef,
  },
});

export default styles;
