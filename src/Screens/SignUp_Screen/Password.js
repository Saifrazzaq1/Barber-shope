import React from 'react';
import {View, Text} from 'react-native';
import Registration from 'src/Components/Registration';
import InputField from 'src/Components/InputFields';
import Button from 'src/Components/Button';
import EyeIcon from 'react-native-vector-icons/dist/AntDesign';
import Icon from 'react-native-vector-icons/dist/AntDesign';

import style from './style';
import {createStackNavigator, createAppContainer} from 'react-navigation';
function SignUp({navigation}) {
  return (
    <View style={style.main}>
      <Registration
        navigation={navigation}
        HeaderText="SignUp"
        // iconButton={<Icon name="left" color="black" size={20} />}
        InputField={
          <InputField
            Heading="Enter your"
            title="Password"
            placeholder="**************"
            icon={<EyeIcon name="eye" color="black" size={20} />}
            passwordType={true}
          />
        }
        Button={
          <Button
            title="Create Account"
            width={200}
            radius={10}
            onPress={() => {
              navigation.navigate('SettingYourProfile');
            }}
          />
        }
        // bottomText={
        //   <Text style={[style.bottomText]}>Already have an Account</Text>
        // }
      />
    </View>
  );
}

export default SignUp;
