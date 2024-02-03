import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Registration from 'src/Components/Registration';
import InputField from 'src/Components/InputFields';
import Button from 'src/Components/Button';
import EyeIcon from 'react-native-vector-icons/dist/Ionicons';
import Icon from 'react-native-vector-icons/dist/AntDesign';

import style from './style';
import {createStackNavigator, createAppContainer} from 'react-navigation';
function NewPassword({navigation}) {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <View style={style.main}>
      <Registration
        navigation={navigation}
        HeaderText="New Password"
        // iconButton={<Icon name="left" color="black" size={20} />}
        InputField={
          <InputField
            Heading="Enter your"
            title="Password"
            placeholder="**************"
            type="password"
            passwordType={showPassword ? true : false}
            icon={
              <TouchableOpacity
                onPress={() => setShowPassword(check => !check)}>
                {showPassword ? (
                  <EyeIcon name="eye" color="black" size={20} />
                ) : (
                  <EyeIcon name="eye-off" color="black" size={20} />
                )}
              </TouchableOpacity>
            }
          />
        }
        Button={
          <Button
            title="Change Password"
            width={200}
            radius={10}
            // onPress={() => {
            //   navigation.navigate('Login');
            // }}
          />
        }
        // bottomText={
        //   <Text style={[style.bottomText]}>Already have an Account</Text>
        // }
      />
    </View>
  );
}

export default NewPassword;
