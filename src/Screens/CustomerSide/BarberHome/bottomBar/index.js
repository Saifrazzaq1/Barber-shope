import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from 'src/Screens/CustomerSide/BarberHome/Home/navigation';
import ProfileScreen from 'src/Screens/CustomerSide/BarberHome/ProfileScreen/navigation';
import {heightRef, widthRef} from 'src/config/screenSize';
import Calender from '../Calender/navigation';
import View from 'src/Components/View';

const Tab = createBottomTabNavigator();

export default function BarberBottomHome() {
  const tabs = [
    {
      name: 'Home',
      image: require('src/Assets/Home.png'),
      Active: '#1C3078',
      InActive: '#A0A0A0',
    },
    {
      name: 'Calender',
      image: require('src/Assets/calender.png'),
      Active: '#1C3078',
      InActive: '#A0A0A0',
    },
    {
      name: 'ProfileScreen',
      image: require('src/Assets/setting.png'),
      Active: '#1C3078',
      InActive: '#A0A0A0',
    },
  ];

  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={({state, navigation}) => {
        console.log(JSON.stringify(state, null, 2));
        return (
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 40,
              flexDirection: 'row',
              position: 'absolute',
              bottom: 45,
              alignSelf: 'center',
              backgroundColor: '#FFF',
              height: 60 * heightRef,
              width: '90%',
              borderRadius: 60,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}>
            {state.routes.map((route, index) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(route.name);
                }}>
                <Image
                  key={index}
                  source={
                    tabs.find(tab => tab.name === route.name)?.image || null
                  }
                  style={{
                    width: 24 * widthRef,
                    height: 24 * widthRef,
                    tintColor:
                      route.name === state.routes[state.index].name
                        ? tabs.find(tab => tab.name === route.name)?.Active
                        : tabs.find(tab => tab.name === route.name)?.InActive,
                  }}
                />
              </TouchableOpacity>
            ))}
          </View>
        );
      }}
      screenOptions={{headerShown: false, lazy: true}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarColor: 'red',
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <Image
              source={tabs.find(tab => tab.name === 'Home')?.image || null}
              style={{
                width: 28 * widthRef,
                height: 28 * widthRef,
                tintColor: color,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Calender"
        component={Calender}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <Image
              source={tabs.find(tab => tab.name === 'Calender')?.image || null}
              style={{
                width: 22 * widthRef,
                height: 22 * widthRef,
                tintColor: color,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <Image
              source={
                tabs.find(tab => tab.name === 'ProfileScreen')?.image || null
              }
              style={{
                width: 28 * widthRef,
                height: 28 * widthRef,
                paddingBottom: 20,
                tintColor: color,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
