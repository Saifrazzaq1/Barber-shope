import React from 'react';
import {View} from 'react-native';
import Registration from 'src/Components/Registration';
import InputField from 'src/Components/InputFields';
import Button from 'src/Components/Button';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import style from './style';
import Text from 'src/Components/Text';
import {createStackNavigator, createAppContainer} from 'react-navigation';
function SignUp({navigation}) {
  return (
    <View style={style.main}>
      <Registration
        navigation={navigation}
        HeaderText="SignUp"
        OTP="OTP"
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
            width={50}
            align="center"
            key={2}
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
              navigation.navigate('Password');
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

export default SignUp;
