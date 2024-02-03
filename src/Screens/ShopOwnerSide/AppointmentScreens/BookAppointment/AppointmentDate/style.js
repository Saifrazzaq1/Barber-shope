import {StyleSheet} from 'react-native';
import {heightRef} from 'src/config/screenSize';
import {widthRef} from 'src/config/screenSize';
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  datePickerStyle: {
    flex: 1,
  },
  body: {flex: 1, padding: 24, paddingTop: 0},
  icon: {
    height: 35 * heightRef,
    width: 35 * widthRef,
  },
  iosButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20 * heightRef,
  },
});
export default styles;
