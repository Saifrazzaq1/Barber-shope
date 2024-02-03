import React from 'react';
import {Image} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeIcon from 'react-native-vector-icons/Ionicons';
import Home from 'src/Screens/ShopOwnerSide/ProfileScreen';
import BarberServices from 'src/Screens/ShopOwnerSide/BarberServices';
import {heightRef, widthRef} from 'src/config/screenSize';
import ClientProfile from 'src/Screens/ShopOwnerSide/ClientProfile/index';
import AppointmentScreen from 'src/Screens/ShopOwnerSide/AppointmentScreens/Navigation/index';
const Tab = createMaterialBottomTabNavigator();

export default function BottomClientHome() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="blue"
      barStyle={{
        backgroundColor: '#FEFEFE',
        marginVertical: 20 * widthRef,
        position: 'absolute',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20 * widthRef,
        borderRadius: 20,
        overflow: 'hidden',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <Image
              source={require('src/Assets/Home.png')}
              style={{
                width: 30 * widthRef,
                height: 30 * widthRef,
                tintColor: color,
                resizeMode: 'contain',
                // alignSelf: 'center',
                // borderRadius: 50,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AppointmentScreen"
        component={AppointmentScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <Image
              source={require('src/Assets/Reserve.png')}
              style={{
                width: 30 * widthRef,
                height: 30 * widthRef,
                tintColor: color,
                resizeMode: 'contain',
                // borderRadius: 50,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ClientProfile"
        component={ClientProfile}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <Image
              source={require('src/Assets/userMale.png')}
              style={{
                width: 30 * widthRef,
                height: 30 * widthRef,
                tintColor: color,
                resizeMode: 'contain',
                // borderRadius: 50,
              }}
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />  */}
    </Tab.Navigator>
  );
}
