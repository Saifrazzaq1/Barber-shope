import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from 'src/Screens/CustomerSide/BarberHome/Home/HomeScreen';
import BarberHomeServices from 'src/Screens/CustomerSide/BarberHome/Home/BarberServices/index.js';
import AddServices from 'src/Screens/CustomerSide/BarberHome/Home/AddServices/index';
const Stack = createStackNavigator();
const Home = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BarberHomeServices"
        component={BarberHomeServices}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddServices"
        component={AddServices}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default Home;
