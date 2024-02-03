import React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import {heightRef, widthRef} from 'src/config/screenSize';
import Text from '../Text';
import style from './style';

function InputField({
  Heading,
  title,
  placeholder,
  type,
  icon,
  maxLength = 15,
  hiddenField,
  passwordType = false,
  otpTypes = false,
  width = '100%',
  onChangeText,
  align = 'left',
  rest,
  viewHeight = 60 * heightRef,
  paddingH = 10 * widthRef,
  ...remaining
}) {
  return (
    <>
      <Text style={style.Heading}>{Heading}</Text>
      <Text
        fontSize={24}
        fontWeight="700"
        fontFamily="Montserrat-Medium"
        style={style.textContent}>
        {title}
      </Text>
      {hiddenField ? null : (
        <View
          style={[
            style.inputFieldView,
            {
              width: width || width * widthRef,
              height: viewHeight,
              paddingHorizontal: paddingH,
            },
          ]}>
          <TextInput
            style={{
              flex: 1,
              color: 'black',
              fontSize: 18,
              textAlign: align || align,
            }}
            placeholder={placeholder}
            placeholderTextColor="#C0C0C0"
            keyboardType={'default'}
            maxLength={maxLength}
            secureTextEntry={passwordType ? true : false}
            onChangeText={onChangeText} // Use the custom setText function
            {...remaining}
          />
          <TouchableOpacity>{icon}</TouchableOpacity>
          {rest}
        </View>
      )}
    </>
  );
}

export default InputField;
