import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Alert, Image} from 'react-native';
import Button from 'src/Components/Button';
import style from './style';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import OTPTextView from 'react-native-otp-textinput';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {CHANGE_OTP_VER, OTPVERIFICATION} from 'src/Redux/Reducers/Auth/actions';
import {validateOTP} from 'src/config/Formvalidation';
import {showSnackbar} from 'src/Components/Snackbar';
import Text from 'src/Components/Text';
function BabrerOTPChange({navigation, route}) {
  const {data} = route.params;
  useEffect(() => {
    console.log(data);
  });
  const inset = useSafeAreaInsets();
  const [otp, setOtp] = useState('');

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

  const handleVER = () => {
    if (validateForm()) {
      console.log('press');
      try {
        CHANGE_OTP_VER({data, otp});
        navigation.goBack();
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
          Change Number
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
        title="Change Number"
        width={220}
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

export default BabrerOTPChange;
