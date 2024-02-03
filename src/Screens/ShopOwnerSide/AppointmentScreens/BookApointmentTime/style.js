import {StyleSheet} from 'react-native';
import {heightRef} from 'src/config/screenSize';
import {widthRef} from 'src/config/screenSize';
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',

    paddingBottom: 100 * heightRef,
  },
  modalTitle: {
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    marginVertical: 10,
  },
  message: {
    // font-size: 16px;
    fontWeight: '400',
    lineHeight: 28,
    letterSpacing: -0.5,
    textAlign: 'left',
  },
  select: {
    width: '100%',
    height: 70 * heightRef,
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#1C3078',
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  times: {
    flexDirection: 'row',
  },
});
export default styles;
