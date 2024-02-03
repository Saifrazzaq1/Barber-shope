import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Alert, Image} from 'react-native';
import Button from 'src/Components/Button';
import style from './style';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import OTPTextView from 'react-native-otp-textinput';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {OTPVERIFICATION} from 'src/Redux/Reducers/Auth/actions';
import {validateOTP} from 'src/config/Formvalidation';
import {showSnackbar} from 'src/Components/Snackbar';
function OTP({navigation, route}) {
  const inset = useSafeAreaInsets();
  const [otp, setOtp] = useState('');
  const phoneNumber = route.params.phoneNumber;
  useEffect(() => {
    console.log(phoneNumber);
  });

  const handleOtpChange = otp => {
    console.log('OTP changed:', otp);
    setOtp(otp);
  };
  const validateForm = () => {
    const otpError = validateOTP(otp);

    if (otpError) {
      showSnackbar({
        type: 'error',
        header: 'Phone ERROR',
        body: otpError,
      });
      return false;
    }

    return true;
  };
  const data = {
    phone: phoneNumber,
    otp: otp,
  };
  const handleVER = () => {
    if (validateForm()) {
      console.log('press');
      try {
        OTPVERIFICATION({phoneNumber, otp});
        navigation.navigate('Password', {phoneNumber});
      } catch (error) {
        showSnackbar({
          type: 'error',
          header: 'Password ERROR',
          body: getError(error),
        });
      }
    }
  };
  return (
    <View style={[style.main, {paddingTop: inset.top}]}>
      <TouchableOpacity
        style={style.headingIcon2}
        onPress={() => navigation.goBack()}>
        <Icon name="chevron-left" color="black" size={25} />
      </TouchableOpacity>
      <View>
        <Text
          fontSize={28}
          fontWeight="600"
          fontFamily="Montserrat-Medium"
          style={style.maintext}>
          OTP Verification
        </Text>
        <Text style={style.Heading}>Enter Your</Text>
        <Text style={style.textContent}>OTP (One-Time-Password)</Text>
      </View>
      <OTPTextView
        containerStyle={style.otpContainer}
        textInputStyle={style.otpInput}
        handleTextChange={handleOtpChange}
        inputCount={6}
        offTintColor="#1C3078"
        tintColor={'green'}
        autoFocus={false}
      />
      <Button
        title="Next"
        width={100}
        radius={10}
        onPress={() => {
          handleVER();
        }}
      />
      <TouchableOpacity
        onPress={() => {
          Alert.alert('Sending OTP in 59s');
        }}>
        <Text style={[style.Text, {marginTop: 5}]}>Send OTP again</Text>
      </TouchableOpacity>
      <View style={style.imageView}>
        <Image source={require('src/Assets/Barber.png')} style={style.img} />
        <TouchableOpacity onPress={() => navigation.navigate('TermCondition')}>
          <Text style={style.term}>Term & conditions</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default OTP;
