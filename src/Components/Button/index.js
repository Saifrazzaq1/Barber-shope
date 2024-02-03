import React from 'react';
import style from './style';
import {heightRef} from 'src/config/screenSize';
import {widthRef} from 'src/config/screenSize';
import {View, Pressable, PressableProps, TouchableOpacity} from 'react-native';
import Text from '../Text';
function Button({
  title,
  width,
  radius,
  setPasswordScreen,
  onPress,
  btnheight,
  Color = '#1C3078',
  btnborderWidth = 2,
  btnmarginTop = 10,
  ...rest
}) {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        android_ripple={{color: 'grey'}}
        style={[
          style.button,
          {
            width: width || width * widthRef,
            height: btnheight,
            borderRadius: radius,
            backgroundColor: Color,
            borderColor: '#1C3078',
            borderWidth: btnborderWidth,
            marginTop: btnmarginTop,
          },
        ]}
        {...rest}>
        <Text
          fontSize={24}
          fontWeight="600"
          fontFamily="Montserrat-Medium"
          style={[
            style.buttonText,
            {color: Color === 'white' ? '#1C3078' : 'white'},
          ]}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Button;
