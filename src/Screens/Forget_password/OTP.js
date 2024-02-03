import React from 'react';
import {View, Text} from 'react-native';
import Registration from 'src/Components/Registration';
import InputField from 'src/Components/InputFields';
import Button from 'src/Components/Button';
import style from './style';
import Icon from 'react-native-vector-icons/dist/AntDesign';

import {createStackNavigator, createAppContainer} from 'react-navigation';
function OTP({navigation}) {
  return (
    <View style={style.main}>
      <Registration
        navigation={navigation}
        HeaderText="Forget Password"
        OTP="OTP"
        // iconButton={<Icon name="left" color="black" size={20} />}
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
            otpTypes={true}
            key={1}
            width={50}
            align="center"
          />,
          <InputField
            // Heading="Enter your"
            // title="OTP (One-Time-Passcode)"
            placeholder="-"
            type="numeric"
            maxLength={1}
            otpTypes={true}
            key={2}
            width={50}
            align="center"
          />,
          <InputField
            // Heading="Enter your"
            // title="OTP (One-Time-Passcode)"
            placeholder="-"
            type="numeric"
            maxLength={1}
            otpTypes={true}
            key={2}
            width={50}
            align="center"
          />,
          <InputField
            // Heading="Enter your"
            // title="OTP (One-Time-Passcode)"
            placeholder="-"
            type="numeric"
            maxLength={1}
            otpTypes={true}
            key={2}
            width={50}
            align="center"
          />,
          <InputField
            // Heading="Enter your"
            // title="OTP (One-Time-Passcode)"
            placeholder="-"
            type="numeric"
            maxLength={1}
            otpTypes={true}
            key={2}
            width={50}
            align="center"
          />,
          <InputField
            // Heading="Enter your"
            // title="OTP (One-Time-Passcode)"
            placeholder="-"
            type="numeric"
            maxLength={1}
            otpTypes={true}
            key={2}
            width={50}
            align="center"
          />,
        ]}
        Button={
          <Button
            title="Next"
            width={100}
            radius={10}
            onPress={() => {
              navigation.navigate('NewPassword');
            }}
          />
        }
      />
    </View>
  );
}

export default OTP;
