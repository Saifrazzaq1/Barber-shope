import React, {useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import {heightRef, widthRef} from 'src/config/screenSize';
import Text from '../Text';
import style from './style';
function Registration({
  HeaderText,
  iconHide,
  InputField,
  Button,
  forgetPassword,
  bottomText,
  OTP,
  OTPText,
  children,
  navigation,
  image = require('src/Assets/Barber.png'),
  barberModule = false,
}) {
  const [passwordScreen, setPasswordScreen] = useState(false);
  console.log(passwordScreen);
  return (
    <View style={style.main}>
      <View style={{zIndex: 1000}}>
        {iconHide ? null : (
          <View style={style.iconView}>
            <Icon
              name="left"
              color="black"
              size={20}
              onPress={() => {
                navigation.goBack();
              }}
            />
          </View>
        )}
        <Text
          fontSize={28}
          fontWeight="600"
          fontFamily="Montserrat-Medium"
          style={style.HeaderText}>
          {HeaderText}
        </Text>
        {OTPText && OTPText}
        <View style={[OTP == 'OTP' ? style.OtpInputFields : style.InputField]}>
          {InputField}
        </View>
        {Button}
        {forgetPassword}
      </View>
      <View
        style={{
          // backgroundColor: 'red',
          // flex: 1,
          justifyContent: 'center',
          alignItems: barberModule ? 'flex-end' : null,
          flexDirection: barberModule ? 'row' : 'column',
        }}>
        <View
          style={[
            style.imageView,
            {
              // backgroundColor: 'red',
              overflow: 'hidden',
              position: barberModule ? 'absolute' : null,
              bottom: barberModule ? -15 * heightRef : null,
              zIndex: barberModule ? -100 : null,
            },
          ]}>
          <Image
            source={image}
            style={[
              style.image,
              {
                resizeMode: barberModule ? null : null,
                width: barberModule ? 400 * widthRef : 400 * widthRef,
                height: barberModule ? 400 * heightRef : 400 * heightRef,
              },
            ]}
          />
        </View>
        <View style={style.bottom}>
          {bottomText}
          <TouchableOpacity
            onPress={() => navigation.navigate('TermCondition')}>
            <Text style={[style.Text, {textAlign: 'center'}]}>
              Term & conditions
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Registration;
