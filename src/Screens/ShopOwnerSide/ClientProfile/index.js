import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UserProfile from 'src/Screens/ShopOwnerSide/ClientProfile/ClientInfo';
import ClientSetting from 'src/Screens/ShopOwnerSide/ClientProfile/ClientSetting';
import EditProfile from './ClientEditProfile';
// import ChangeNumber from '../ChangeNumber';
// import OTPChangeNumber from '../OTPChangeText';
// import ChangePassword from './ChangePassword';
const Stack = createStackNavigator();

const ClientProfile = () => {
  return (
    <Stack.Navigator initialRouteName="UserProfile">
      <Stack.Screen
        name="UserProfile"
        component={UserProfile}
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
      {/* <Stack.Screen
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
      />  */}
    </Stack.Navigator>
  );
};

export default ClientProfile;
