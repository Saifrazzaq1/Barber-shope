import {StyleSheet} from 'react-native';
import {heightRef} from 'src/config/screenSize';
import {widthRef} from 'src/config/screenSize';
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  headingIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 95 * widthRef,
  },
  headingIcon2: {
    flexDirection: 'row',
  },

  image: {
    resizeMode: 'contain',
    height: 30 * heightRef,
    width: 64.2 * widthRef,
  },
  imageIcon2: {
    resizeMode: 'contain',
    height: 25 * heightRef,
    width: 25 * widthRef,
  },
  headerText: {
    lineHeight: 64 * heightRef,
    textAlign: 'left',
    color: '#1C3078',
  },
});

export default styles;
