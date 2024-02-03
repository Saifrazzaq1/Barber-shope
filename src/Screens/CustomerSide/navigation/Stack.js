import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from 'src/Screens/CustomerSide/Login/index.js';
import SliderScreen from 'src/Screens/SliderScreen';
import SplashScreen from 'src/Screens/SplashScreen';
import ForgetPassord from 'src/Screens/CustomerSide/ForgetPassword/index';
import SignUp from 'src/Screens/CustomerSide/SignUp/index';
import SettingYourProfile from 'src/Screens/CustomerSide/Setting_your_profile/index';
import BarberHome from 'src/Screens/CustomerSide/BarberHome/navigation';
import BarberChangeNumber from 'src/Screens/CustomerSide/BarberHome/ProfileScreen/Profile/ChangeNum';
import OTP from '../OtpNumberChange/OTP';
import BarberChangePassword from 'src/Screens/CustomerSide/BarberHome/ProfileScreen/Profile/ChangePassword';
import Main from 'src/Screens/Main';
const Stack = createStackNavigator();
const BarberStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SliderScreen"
        component={SliderScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Main"
        component={Main}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgetPassord"
        component={ForgetPassord}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SettingYourProfile"
        component={SettingYourProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BarberHome"
        component={BarberHome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BarberChangeNumber"
        component={BarberChangeNumber}
        options={{headerShown: false}}
      />
      <Stack.Screen name="OTP" component={OTP} options={{headerShown: false}} />
      <Stack.Screen
        name="BarberChangePassword"
        component={BarberChangePassword}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default BarberStack;
