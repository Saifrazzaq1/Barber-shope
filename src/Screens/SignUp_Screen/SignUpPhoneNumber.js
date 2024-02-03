import React from 'react';
import {View, Pressable} from 'react-native';
import Registration from 'src/Components/Registration';
import InputField from 'src/Components/InputFields';
import Button from 'src/Components/Button';
import style from './style';
import Text from 'src/Components/Text';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import {createStackNavigator, createAppContainer} from 'react-navigation';
function SignUp({navigation}) {
  return (
    <View style={style.main}>
      <Registration
        navigation={navigation}
        HeaderText="SignUp"
        iconHide={true}
        // iconButton={<Icon name="left" color="black" size={20} />}
        InputField={
          <InputField
            Heading="Enter your"
            title="Phone Number"
            placeholder="+92 3XX XXXXXXX"
            type="phone-pad"
          />
        }
        Button={
          <Button
            title="Next"
            width={100}
            radius={10}
            onPress={() => {
              navigation.navigate('OTP');
            }}
          />
        }
        bottomText={
          <Pressable
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text style={[style.bottomText]}>Already have an Account</Text>
          </Pressable>
        }
      />
    </View>
  );
}

export default SignUp;
