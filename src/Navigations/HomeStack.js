import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import ClientHome from 'src/Screens/ShopOwnerSide';
import BarberProfile from 'src/Screens/ShopOwnerSide/BarberProfile';
import BarberServices from 'src/Screens/ShopOwnerSide/BarberServices/index';
import ForgetPassord from 'src/Screens/Forget_password';
import Login from 'src/Screens/Login';
import Main from 'src/Screens/Main';
import SettingYourProfile from 'src/Screens/Setting_your_profile';
import SignUp from 'src/Screens/SignUp_Screen';
import AppointmentTime from 'src/Screens/ShopOwnerSide/AppointmentScreens/BookApointmentTime';
import AppointmentDate from 'src/Screens/ShopOwnerSide/AppointmentScreens/BookAppointment/AppointmentDate';
import AppointmentBarber from 'src/Screens/ShopOwnerSide/AppointmentScreens/BookAppointmentBarber';
import AppointmentServices from 'src/Screens/ShopOwnerSide/AppointmentScreens/BookAppointmentsServicevic';
import AppointmentScreen from 'src/Screens/ShopOwnerSide/AppointmentScreens/Navigation';
import ClientProfile from 'src/Screens/ShopOwnerSide/ClientProfile';
import TermCondition from 'src/Screens/TermCondition';
import ChangeNumber from 'src/Screens/ShopOwnerSide/ChangeNumber';
import OTPChangeNumber from 'src/Screens/ShopOwnerSide/OTPChangeText';
import ChangePassword from 'src/Screens/ShopOwnerSide/ClientProfile/ChangePassword';
import SliderScreen from 'src/Screens/SliderScreen';
import SplashScreen from 'src/Screens/SplashScreen';
import BarberHomeServices from 'src/Screens/CustomerSide/BarberHome/Home/BarberServices/index';
import BarberStack from 'src/Screens/CustomerSide/navigation/Stack';
import Message from 'src/Screens/CustomerSide/BarberHome/Home/Message';
import Feedback from 'src/Screens/CustomerSide/BarberHome/Home/Feedback';
import ProfileAddress from 'src/Screens/CustomerSide/Setting_your_profile/ProfileAddress';
import NewPassword from 'src/Screens/CustomerSide/ForgetPassword/NewPassword';
import ForgetPassword from 'src/Screens/CustomerSide/ForgetPassword/ForgetPassword';
import BarberChangeNumber from 'src/Screens/CustomerSide/BarberHome/ProfileScreen/Profile/ChangeNum';
import BaberEditProfile from 'src/Screens/CustomerSide/BarberHome/ProfileScreen/Profile/EditProfile';
import FAQ from 'src/Screens/CustomerSide/BarberHome/Home/FAQ';
import AboutUs from 'src/Screens/CustomerSide/BarberHome/Home/AboutUs';
import Calender from 'src/Screens/CustomerSide/BarberHome/Calender/navigation';
import ProfilePicture from 'src/Screens/CustomerSide/Setting_your_profile/ProfilePicture';
import Accounts from 'src/Screens/CustomerSide/BarberHome/ProfileScreen/Profile/Accounts';
import BarberHome from 'src/Screens/CustomerSide/BarberHome/navigation';
import ClientSetting from 'src/Screens/ShopOwnerSide/ClientProfile/ClientSetting';
import EditProfile from 'src/Screens/ShopOwnerSide/ClientProfile/ClientEditProfile';
import BabrerOTPChange from 'src/Screens/CustomerSide/BarberHome/ProfileScreen/Profile/OTPChange';
import BarberChangePassword from 'src/Screens/CustomerSide/BarberHome/ProfileScreen/Profile/ChangePassword';
import ChangeAddress from 'src/Screens/CustomerSide/BarberHome/ProfileScreen/Profile/ChangeAddress';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="BarberHome">
      <Stack.Screen
        name="BarberHome"
        component={BarberHome}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SliderScreen"
        component={SliderScreen}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="Accounts"
        component={Accounts}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfilePicture"
        component={ProfilePicture}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BaberEditProfile"
        component={BaberEditProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen name="FAQ" component={FAQ} options={{headerShown: false}} />
      <Stack.Screen
        name="AboutUs"
        component={AboutUs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BarberChangeNumber"
        component={BarberChangeNumber}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Calender"
        component={Calender}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NewPassword"
        component={NewPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Main"
        component={Main}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgetPassord"
        component={ForgetPassord}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SettingYourProfile"
        component={SettingYourProfile}
        options={{headerShown: false}}
      /> */}
      {/* <Stack.Screen
        name="ClientHome"
        component={ClientHome}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="BarberServices"
        component={BarberServices}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BarberProfile"
        component={BarberProfile}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="ClientProfile"
        component={ClientProfile}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="Message"
        component={Message}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AppointmentScreen"
        component={AppointmentScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AppointmentDate"
        component={AppointmentDate}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AppointmentServices"
        component={AppointmentServices}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AppointmentBarber"
        component={AppointmentBarber}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AppointmentTime"
        component={AppointmentTime}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TermCondition"
        component={TermCondition}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ClientSetting"
        component={ClientSetting}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChangeNumber"
        component={ChangeNumber}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OTPChangeNumber"
        component={OTPChangeNumber}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfileAddress"
        component={ProfileAddress}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BarberStack"
        component={BarberStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BarberHomeServices"
        component={BarberHomeServices}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Feedback"
        component={Feedback}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BabrerOTPChange"
        component={BabrerOTPChange}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BarberChangePassword"
        component={BarberChangePassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChangeAddress"
        component={ChangeAddress}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
