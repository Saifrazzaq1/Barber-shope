import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {heightRef} from 'src/config/screenSize';
import {widthRef} from 'src/config/screenSize';
const styles = StyleSheet.create({
  title: {
    textAlign: 'left',
    marginTop: 10,
    color: '#C4C4C4',
  },
  card: {
    padding: 10,
    paddingVertical: 20,
    alignItem: 'center',
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    borderRadius: 20,
    // flex: 1,
    width: '100%',
    marginBottom: 10,
    // marginRight: 10,
    // marginLeft: 10,
    // marginVertical: 10 * heightRef,
    // marginRight: 10 * widthRef,
    marginTop: 10 * heightRef,
  },
  content: {
    flexDirection: 'row',
    width: '100%',
    flex: 1,
    justifyContent: 'space-between',
  },
  textsBody: {
    // backgroundColor: 'red',
    flex: 1,
    paddingHorizontal: 10 * widthRef,
  },
  barberName: {
    fontWeight: '600',
    letterSpacing: -0.5,
    textAlign: 'left',
  },
  amountTypes: {
    letterSpacing: -0.5,
    textAlign: 'right',
    marginRight: 3,
  },
  totalAmount: {
    textAlign: 'right',
  },
  barberServices: {
    letterSpacing: -0.5,
  },
  barberName: {
    // font-size: 16px;
    lineHeight: 22,
  },
  barberMessage: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
    letterSpacing: -0.5,
    marginLeft: 5,
  },
});
export default styles;
