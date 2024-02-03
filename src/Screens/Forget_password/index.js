import React from 'react';
import {View, Text} from 'react-native';
import Registration from 'src/Components/Registration';
import InputField from 'src/Components/InputFields';
import Button from 'src/Components/Button';
import style from './style';
import {createStackNavigator} from '@react-navigation/stack';
import ForgetPassword from 'src/Screens/Forget_password/forgetPassword';
import OTP from 'src/Screens/Forget_password/OTP';
import NewPassword from 'src/Screens/Forget_password/newPassword';
const Stack = createStackNavigator();
function ForgetPassord({navigation}) {
  return (
    <View style={style.main}>
      <Stack.Navigator initialRouteName="ForgetPassword">
        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OTP"
          component={OTP}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NewPassword"
          component={NewPassword}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </View>
  );
}

export default ForgetPassord;
