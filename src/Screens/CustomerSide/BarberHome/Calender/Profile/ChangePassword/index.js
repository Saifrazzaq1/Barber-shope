import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Registration from 'src/Components/Registration';
import InputField from 'src/Components/InputFields';
import Button from 'src/Components/Button';
import style from './style';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import EyeIcon from 'react-native-vector-icons/dist/Ionicons';

import {createStackNavigator, createAppContainer} from 'react-navigation';
function BarberChangePassword({navigation}) {
  const [showPassword, setShowPassword] = useState(true);
  const [n_showPassword, n_setShowPassword] = useState(true);
  return (
    <View style={style.main}>
      <Registration
        navigation={navigation}
        HeaderText="Change Password"
        barberModule={true}
        iconButton={<Icon name="left" color="black" size={20} />}
        image={require('src/Assets/barberRegistration.png')}
        InputField={[
          <InputField
            Heading="Enter your"
            title="Old Password"
            placeholder="**************"
            // type="numeric"
            // otpTypes={true}
            passwordType={showPassword ? true : false}
            icon={
              <TouchableOpacity
                onPress={() => setShowPassword(check => !check)}>
                <EyeIcon
                  name={showPassword ? 'eye' : 'eye-off'}
                  color="black"
                  size={20}
                />
              </TouchableOpacity>
            }
          />,
          <InputField
            Heading="Enter your"
            title="New Password"
            placeholder="**************"
            // type="numeric"
            // otpTypes={true}
            passwordType={n_showPassword ? true : false}
            icon={
              <TouchableOpacity
                onPress={() => n_setShowPassword(check => !check)}>
                <EyeIcon
                  name={n_showPassword ? 'eye' : 'eye-off'}
                  color="black"
                  size={20}
                />
              </TouchableOpacity>
            }
          />,
        ]}
        Button={
          <Button
            title="Send OTP"
            width={200}
            radius={10}
            onPress={() => {
              navigation.navigate('BabrerOTPChange');
            }}
          />
        }
      />
    </View>
  );
}

export default BarberChangePassword;
