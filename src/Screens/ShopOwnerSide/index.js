import React from 'react';
import {View} from 'react-native';
import Header from 'src/Components/Header';
import {createStackNavigator} from '@react-navigation/stack';
import Home from 'src/Screens/ShopOwnerSide/ProfileScreen';
import BottomClientHome from 'src/Screens/ShopOwnerSide/bottomBar';
import ClientProfile from 'src/Screens/ShopOwnerSide/ClientProfile/index';
const Stack = createStackNavigator();

import styles from './style';
export default function ClientHome() {
  return (
    // <View style={styles.main}>
    //   <Header headerText="Profile" />
    //   <View style={{flex: 1}}></View>
    // </View>
    <Stack.Navigator initialRouteName="BottomClientHome">
      <Stack.Screen
        name="BottomClientHome"
        component={BottomClientHome}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="ClientProfile"
        component={ClientProfile}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
}
