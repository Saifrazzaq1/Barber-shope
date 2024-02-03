import React from 'react';
import {View, Text} from 'react-native';

import style from './style';
import {createStackNavigator} from '@react-navigation/stack';
import SignUpPhoneNumber from 'src/Screens/CustomerSide/SignUp/SignUpPhoneNumber';
import OTP from 'src/Screens/CustomerSide/SignUp/OTP';
import Password from 'src/Screens/CustomerSide/SignUp/Password';
const Stack = createStackNavigator();
function SignUp({navigation}) {
  return (
    <Stack.Navigator initialRouteName="SignUpPhoneNumber">
      <Stack.Screen
        name="SignUpPhoneNumber"
        component={SignUpPhoneNumber}
        options={{headerShown: false}}
      />
      <Stack.Screen name="OTP" component={OTP} options={{headerShown: false}} />
      <Stack.Screen
        name="Password"
        component={Password}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default SignUp;
