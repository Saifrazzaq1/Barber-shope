import {StyleSheet} from 'react-native';
import {widthRef, heightRef} from 'src/config/screenSize';
const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
  image: {width: 315.93 * widthRef, height: 193 * heightRef},
});
export default styles;
