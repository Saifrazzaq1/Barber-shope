/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Platform,
  Text as RNText,
  TextProps,
  TouchableOpacity,
} from 'react-native';
import globalStyles from 'src/config/globalStyles';
import {fontRef, heightRef} from 'src/config/screenSize';

const Text = ({
  color = globalStyles.Theme.PrimaryColor,
  fontSize = 14,
  bold,
  fontWeight = '400',
  width,
  children,
  paddingVertical = 0,
  style,
  textAlignVertical = 'center',
  fontFamily = 'Montserrat-Regular',
  onPress,
  ...rest
}) => {
  return (
    <TouchableOpacity disabled={!onPress} onPress={onPress}>
      <RNText
        style={[
          {
            color,
            fontWeight: fontWeight,
            fontSize: fontSize * fontRef,
            paddingVertical: paddingVertical * heightRef,
            textAlignVertical,
            fontFamily: fontFamily,
          },
          width !== undefined ? {width} : {},
          style,
          // Platform.select({android: {fontFamily: 'Montserrat'}}),
        ]}
        {...rest}>
        {children}
      </RNText>
    </TouchableOpacity>
  );
};

export default Text;
