import React from 'react';
import {View, Text} from 'react-native';
import Registration from 'src/Components/Registration';
import InputField from 'src/Components/InputFields';
import Button from 'src/Components/Button';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import style from './style';
import {createStackNavigator, createAppContainer} from 'react-navigation';
function BabrerOTPChange({navigation}) {
  return (
    <View style={style.main}>
      <Registration
        navigation={navigation}
        HeaderText="Change Number"
        OTP="OTP"
        barberModule={true}
        image={require('src/Assets/barberRegistration.png')}
        OTPText={
          <View>
            <Text style={style.Heading}>Enter Your</Text>
            <Text style={style.textContent}>OTP (One-Time-Password)</Text>
          </View>
        }
        InputField={[
          <InputField
            // Heading="Enter your"
            // title="OTP (One-Time-Passcode)"
            placeholder="-"
            type="numeric"
            maxLength={1}
            key={1}
            width={50}
            otpTypes={true}
            align="center"
          />,
          <InputField
            // Heading="Enter your"
            // title="OTP (One-Time-Passcode)"
            placeholder="-"
            type="numeric"
            maxLength={1}
            key={2}
            width={50}
            otpTypes={true}
            align="center"
          />,
          <InputField
            // Heading="Enter your"
            // title="OTP (One-Time-Passcode)"
            placeholder="-"
            type="numeric"
            maxLength={1}
            key={2}
            width={50}
            otpTypes={true}
            align="center"
          />,
          <InputField
            // Heading="Enter your"
            // title="OTP (One-Time-Passcode)"
            placeholder="-"
            type="numeric"
            maxLength={1}
            key={2}
            width={50}
            otpTypes={true}
            align="center"
          />,
          <InputField
            // Heading="Enter your"
            // title="OTP (One-Time-Passcode)"
            placeholder="-"
            type="numeric"
            maxLength={1}
            key={2}
            width={50}
            otpTypes={true}
            align="center"
          />,
          <InputField
            // Heading="Enter your"
            // title="OTP (One-Time-Passcode)"
            placeholder="-"
            type="numeric"
            maxLength={1}
            key={2}
            width={50}
            otpTypes={true}
            align="center"
          />,
        ]}
        Button={
          <Button
            title="Change Number"
            width={200}
            radius={10}
            onPress={() => {
              navigation.navigate('ChangePassword');
            }}
          />
        }
        forgetPassword={
          <Text style={[style.Text, {marginTop: 5}]}>Send OTP again</Text>
        }
      />
    </View>
  );
}

export default BabrerOTPChange;
