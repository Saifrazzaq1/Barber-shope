import {StyleSheet} from 'react-native';
import {heightRef} from 'src/config/screenSize';
import {widthRef} from 'src/config/screenSize';
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingBottom: 180 * heightRef,
  },
});
export default styles;
