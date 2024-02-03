import React from 'react';
import {View, Text} from 'react-native';
import Registration from 'src/Components/Registration';
import InputField from 'src/Components/InputFields';
import Button from 'src/Components/Button';
import style from './style';
import {createStackNavigator} from '@react-navigation/stack';
import ForgetPassword from 'src/Screens/CustomerSide/ForgetPassword/ForgetPassword';
import OTP from 'src/Screens/CustomerSide/ForgetPassword/OTP';
import NewPassword from 'src/Screens/CustomerSide/ForgetPassword/NewPassword';
const Stack = createStackNavigator();
function ForgetPassord({navigation}) {
  return (
    <Stack.Navigator initialRouteName="ForgetPassword">
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen name="OTP" component={OTP} options={{headerShown: false}} />
      <Stack.Screen
        name="NewPassword"
        component={NewPassword}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default ForgetPassord;
