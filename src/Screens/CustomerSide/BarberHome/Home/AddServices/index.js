import React from 'react';
import {View, Text} from 'react-native';
import Registration from 'src/Components/Registration';
import InputField from 'src/Components/InputFields';
import Button from 'src/Components/Button';
import style from './style';
import {createStackNavigator} from '@react-navigation/stack';
import AddPicture from 'src/Screens/CustomerSide/BarberHome/Home/AddServices/AddNewPic';
import AddTime from 'src/Screens/CustomerSide/BarberHome/Home/AddServices/AddTime';
const Stack = createStackNavigator();
function AddServices({navigation}) {
  return (
    <View style={style.main}>
      <Stack.Navigator initialRouteName="AddPicture">
        <Stack.Screen
          name="AddPicture"
          component={AddPicture}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddTime"
          component={AddTime}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </View>
  );
}

export default AddServices;
