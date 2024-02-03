import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import Registration from 'src/Components/Registration';
import InputField from 'src/Components/InputFields';
import Button from 'src/Components/Button';
import style from './style';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

function OTP({navigation, route}) {
  const profile = route.params?.ChangePassword;
  console.log('🚀 ~ file: OTP.js:14 ~ OTP ~ profile:', profile);
  const inset = useSafeAreaInsets();

  return (
    <View style={[style.main, {paddingTop: inset.top}]}>
      <TouchableOpacity
        style={style.headingIcon2}
        onPress={() => navigation.goBack()}>
        <Icon name="left" color="black" size={25} />
      </TouchableOpacity>
      <Registration
        iconHide
        navigation={navigation}
        HeaderText="OTP Verification"
        OTP="OTP"
        barberModule={true}
        OTPText={
          <View>
            <Text style={style.Heading}>Enter Your</Text>
            <Text style={style.textContent}>OTP (One-Time-Password)</Text>
          </View>
        }
        InputField={[
          <InputField
            placeholder="-"
            type="numeric"
            maxLength={1}
            otpTypes={true}
            key={1}
            width={50}
            align="center"
          />,
          <InputField
            placeholder="-"
            type="numeric"
            maxLength={1}
            otpTypes={true}
            key={2}
            width={50}
            align="center"
          />,
          <InputField
            placeholder="-"
            type="numeric"
            maxLength={1}
            otpTypes={true}
            key={2}
            width={50}
            align="center"
          />,
          <InputField
            placeholder="-"
            type="numeric"
            maxLength={1}
            otpTypes={true}
            key={2}
            width={50}
            align="center"
          />,
          <InputField
            placeholder="-"
            type="numeric"
            maxLength={1}
            otpTypes={true}
            key={2}
            width={50}
            align="center"
          />,
          <InputField
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
              if (profile == 'ppp') {
                navigation.navigate('Setting');
              }
            }}
          />
        }
        forgetPassword={
          <TouchableOpacity
            onPress={() => {
              Alert.alert('Sending OTP in 59s');
            }}>
            <Text style={[style.Text, {marginTop: 5}]}>Send OTP again</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
}

export default OTP;
