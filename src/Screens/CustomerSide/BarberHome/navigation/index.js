import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BarberBottomHome from 'src/Screens/CustomerSide/BarberHome/bottomBar';
const Stack = createStackNavigator();
export default function BarberHome() {
  return (
    <Stack.Navigator initialRouteName="BarberBottomHome">
      <Stack.Screen
        name="BarberBottomHome"
        component={BarberBottomHome}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
