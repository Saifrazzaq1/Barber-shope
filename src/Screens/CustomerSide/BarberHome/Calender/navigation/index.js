import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import BarberBottomHome from 'src/Screens/barberModule/BarberHome/bottomBar';
import BarberProfile from 'src/Screens/CustomerSide/BarberHome/Calender/Profile/ProfileHome';
import BarberSetting from 'src/Screens/CustomerSide/BarberHome/Calender/Profile/Settings';
import BaberEditProfile from 'src/Screens/CustomerSide/BarberHome/Calender/Profile/EditProfile';
import BarberChangeNumber from 'src/Screens/CustomerSide/BarberHome/Calender/Profile/ChangeNum';
const Stack = createStackNavigator();
export default function Calender() {
  return (
    <Stack.Navigator initialRouteName="BarberProfile">
      <Stack.Screen
        name="BarberProfile"
        component={BarberProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BarberSetting"
        component={BarberSetting}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BaberEditProfile"
        component={BaberEditProfile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
