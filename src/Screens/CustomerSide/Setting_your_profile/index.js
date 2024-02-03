import React from 'react';
import {View, Text} from 'react-native';
import Registration from 'src/Components/Registration';
import InputField from 'src/Components/InputFields';
import Button from 'src/Components/Button';
import style from './style';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileName from 'src/Screens/CustomerSide/Setting_your_profile/ProfileName';
import ProfilePicture from 'src/Screens/CustomerSide/Setting_your_profile/ProfilePicture';
import ProfileAddress from 'src/Screens/CustomerSide/Setting_your_profile/ProfileAddress';
const Stack = createStackNavigator();
function SettingYourProfile({navigation}) {
  return (
    <Stack.Navigator initialRouteName="ProfileName">
      <Stack.Screen
        name="ProfileName"
        component={ProfileName}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfileAddress"
        component={ProfileAddress}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfilePicture"
        component={ProfilePicture}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default SettingYourProfile;
