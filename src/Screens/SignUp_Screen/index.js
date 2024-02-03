import React from 'react';
import {View, Text} from 'react-native';
import Registration from 'src/Components/Registration';
import InputField from 'src/Components/InputFields';
import Button from 'src/Components/Button';
import style from './style';
import {createStackNavigator} from '@react-navigation/stack';
import SignUpPhoneNumber from 'src/Screens/SignUp_Screen/SignUpPhoneNumber';
import OTP from 'src/Screens/SignUp_Screen/OTP';
import Password from 'src/Screens/SignUp_Screen/Password';
const Stack = createStackNavigator();
function SignUp({navigation}) {
  return (
    <View style={style.main}>
      <Stack.Navigator initialRouteName="SignUpPhoneNumber">
        <Stack.Screen
          name="SignUpPhoneNumber"
          component={SignUpPhoneNumber}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OTP"
          component={OTP}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Password"
          component={Password}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </View>
  );
}

export default SignUp;
