import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignUpPhoneNumber from 'src/Screens/SignUp_Screen/SignUpPhoneNumber';
import Password from 'src/Screens/SignUp_Screen/Password';
import TermCondition from 'src/Screens/TermCondition';
import Login from 'src/Screens/CustomerSide/Login/index.js';
import SliderScreen from 'src/Screens/SliderScreen';
import SplashScreen from 'src/Screens/SplashScreen';
import ForgetPassword from 'src/Screens/CustomerSide/ForgetPassword/ForgetPassword';
import SignUp from 'src/Screens/CustomerSide/SignUp/index';
import SettingYourProfile from 'src/Screens/CustomerSide/Setting_your_profile/index';
import BarberHome from 'src/Screens/CustomerSide/BarberHome/navigation';
import BarberChangeNumber from 'src/Screens/CustomerSide/BarberHome/ProfileScreen/Profile/ChangeNum';

import BarberChangePassword from 'src/Screens/CustomerSide/BarberHome/ProfileScreen/Profile/ChangePassword';
import Main from 'src/Screens/Main';
import OTP from 'src/Screens/CustomerSide/ForgetPassword/OTP';
import NewPassword from 'src/Screens/CustomerSide/ForgetPassword/NewPassword';
const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="SplashScreen">
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="SliderScreen" component={SliderScreen} />
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Login" component={Login} />

      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SettingYourProfile" component={SettingYourProfile} />
      {/* <Stack.Screen
        name="BarberHome"
        component={BarberHome}
      /> */}

      <Stack.Screen name="SignUpPhoneNumber" component={SignUpPhoneNumber} />
      <Stack.Screen name="OTP" component={OTP} />
      <Stack.Screen name="Password" component={Password} />
      <Stack.Screen name="ForgetPassord" component={ForgetPassword} />

      <Stack.Screen name="NewPassword" component={NewPassword} />
      <Stack.Screen name="TermCondition" component={TermCondition} />
      <Stack.Screen name="BarberChangeNumber" component={BarberChangeNumber} />

      <Stack.Screen
        name="BarberChangePassword"
        component={BarberChangePassword}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
