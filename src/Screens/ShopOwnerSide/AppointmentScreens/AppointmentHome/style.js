import {StyleSheet} from 'react-native';
import {heightRef} from 'src/config/screenSize';
import {widthRef} from 'src/config/screenSize';
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    // backgroundColor: 'red',
    padding: 10,
    paddingBottom: 100 * heightRef,
  },
});
export default styles;
