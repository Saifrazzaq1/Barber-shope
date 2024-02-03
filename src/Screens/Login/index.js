import React, {useState} from 'react';
import {View, Image, Pressable, TouchableOpacity} from 'react-native';
import style from './style';
import InputField from 'src/Components/InputFields';
import Button from 'src/Components/Button';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import EyeIcon from 'react-native-vector-icons/dist/Ionicons';

import Registration from 'src/Components/Registration';
import iconButton from 'react-native-vector-icons/dist/AntDesign';
import Text from 'src/Components/Text';
function Login({navigation}) {
  const [passwordScreen, setPasswordScreen] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [text, setText] = React.useState('Baqar@123');
  // console.log(passwordScreen);
  const validate_f = () => {
    var strongRegex = '(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}';

    // const res = text.match(strongRegex);
    console.log(text);
    if (text.match(strongRegex)) {
      console.log('password valid');
    } else {
      console.log('inValid');
    }
  };
  return (
    <View style={style.main}>
      <Registration
        navigation={navigation}
        HeaderText="Login"
        iconHide={passwordScreen ? null : true}
        InputField={
          <InputField
            Heading="Enter your"
            title={passwordScreen ? 'Password' : 'Phone Number'}
            placeholder={passwordScreen ? '*************' : '+92 3XX XXXXXXX'}
            type={passwordScreen ? null : 'phone-pad'}
            passwordType={showPassword ? true : false}
            setText={setText}
            icon={
              passwordScreen ? (
                <TouchableOpacity
                  onPress={() => setShowPassword(check => !check)}>
                  {showPassword ? (
                    <EyeIcon name="eye" color="black" size={20} />
                  ) : (
                    <EyeIcon name="eye-off" color="black" size={20} />
                  )}
                </TouchableOpacity>
              ) : null
            }
            onChangeText={passwordScreen ? () => text => setText(text) : null}
          />
        }
        Button={
          <Button
            title={passwordScreen ? 'Login' : 'Next'}
            width={100}
            radius={10}
            onPress={() => {
              setPasswordScreen(check => !check);
              passwordScreen ? navigation.navigate('ClientHome') : null;
              passwordScreen ? validate_f() : null;
            }}
          />
        }
        forgetPassword={
          passwordScreen ? (
            <Pressable
              onPress={() => {
                navigation.navigate('ForgetPassord');
              }}>
              <Text style={[style.Text, {marginTop: 5}]}>Forgot Password</Text>
            </Pressable>
          ) : null
        }
        bottomText={
          passwordScreen ? null : (
            <Pressable
              onPress={() => {
                navigation.navigate('SignUp');
              }}>
              <Text style={style.bottomText}>Dont't have Account</Text>
            </Pressable>
          )
        }
      />
    </View>
  );
}

export default Login;
