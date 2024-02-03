import React, {useState} from 'react';
import {Pressable, Text, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Button from 'src/Components/Button';
import InputField from 'src/Components/InputFields';
import Registration from 'src/Components/Registration';
import style from './style';
import {validatePhone} from 'src/config/Formvalidation';
import {showSnackbar} from 'src/Components/Snackbar';
import {getError} from 'src/config/function';
import {FORGOT_PASSWORD} from 'src/Redux/Reducers/Auth/actions';
function ForgetPassword({navigation}) {
  const inset = useSafeAreaInsets();
  const [phoneNumber, setPhoneNumber] = useState(
    __DEV__ ? '+923249470845' : '',
  );
  const validateForm = () => {
    const phoneError = validatePhone(phoneNumber);

    if (phoneError) {
      showSnackbar({
        type: 'error',
        header: 'Phone ERROR',
        body: phoneError,
      });
      return false;
    }

    return true;
  };
  const handleOtp = () => {
    if (validateForm()) {
      const data = {
        phone: phoneNumber,
      };
      console.log('press');
      try {
        FORGOT_PASSWORD({data});
        navigation.navigate('OTP', {phoneNumber});
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
      <Registration
        iconHide
        HeaderText="Forget Password"
        barberModule={true}
        InputField={
          <InputField
            Heading="Enter your"
            title="Phone Number"
            placeholder="+92 3XX XXXXXXX"
            type="number-pad"
            align="left"
            onChangeText={text => setPhoneNumber(text)}
            value={phoneNumber}
          />
        }
        Button={
          <Button
            title="Send"
            width={100}
            radius={10}
            onPress={() => {
              handleOtp();
            }}
          />
        }
        bottomText={
          <Pressable
            onPress={() => {
              navigation.navigate('SignUp');
            }}>
            <Text style={[style.bottomText]}>Don't have Account</Text>
          </Pressable>
        }
      />
    </View>
  );
}

export default ForgetPassword;
