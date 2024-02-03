import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AppointmentHome from '../AppointmentHome';
import AppointmentDate from '../BookAppointment/AppointmentDate';
import AppointmentServices from '../BookAppointmentsServicevic';
import AppointmentBarber from '../BookAppointmentBarber';
import AppointmentTime from '../BookApointmentTime';
const Stack = createStackNavigator();

const AppointmentScreen = () => {
  return (
    <Stack.Navigator initialRouteName="AppointmentHome">
      <Stack.Screen
        name="AppointmentHome"
        component={AppointmentHome}
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
    </Stack.Navigator>
  );
};

export default AppointmentScreen;
