import React, {useState} from 'react';
import {Image, Pressable, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Button from 'src/Components/Button';
import InputField from 'src/Components/InputFields';
import Registration from 'src/Components/Registration';
import Text from 'src/Components/Text';
import style from './style';
import {SIGNUPOTP} from 'src/Redux/Reducers/Auth/actions';
import {validatePhone} from 'src/config/Formvalidation';
import {showSnackbar} from 'src/Components/Snackbar';
function SignUp({navigation}) {
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
        SIGNUPOTP({phoneNumber});
        navigation.navigate('OTP', {phoneNumber});
      } catch (error) {
        showSnackbar({
          type: 'error',
          header: 'Signup ERROR',
          body: getError(error),
        });
      }
    }
  };
  return (
    <View style={[style.main, {paddingTop: inset.top}]}>
      <View style={style.headingIcon2}>
        <Image
          style={style.imageIcon2}
          source={require('src/Assets/Arrow.png')}
        />
      </View>
      <Registration
        navigation={navigation}
        HeaderText="SignUp"
        iconHide={true}
        barberModule={true}
        InputField={
          <InputField
            Heading="Enter your"
            title="Phone Number"
            placeholder="+92 3XX XXXXXXX"
            type="number-pad"
            onChangeText={text => setPhoneNumber(text)}
            value={phoneNumber}
          />
        }
        Button={
          <Button
            title="Next"
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
              navigation.navigate('Login');
            }}>
            <Text style={[style.bottomText]}>Already have an Account</Text>
          </Pressable>
        }
      />
    </View>
  );
}

export default SignUp;
