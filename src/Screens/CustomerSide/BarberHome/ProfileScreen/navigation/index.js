import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import BarberBottomHome from 'src/Screens/barberModule/BarberHome/bottomBar';
import Setting from '../Profile/Setting';
import BarberProfile from '../Profile/BarberProfile';

const Stack = createStackNavigator();
export default function ProfileScreen() {
  return (
    <Stack.Navigator initialRouteName="Setting">
      <Stack.Screen
        name="BarberProfile"
        component={BarberProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
