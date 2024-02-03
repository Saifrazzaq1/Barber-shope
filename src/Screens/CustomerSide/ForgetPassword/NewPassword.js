import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Registration from 'src/Components/Registration';
import InputField from 'src/Components/InputFields';
import Button from 'src/Components/Button';
import EyeIcon from 'react-native-vector-icons/dist/Ionicons';
import Icon from 'react-native-vector-icons/dist/AntDesign';

import style from './style';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FORGOT_NEW_PASS} from 'src/Redux/Reducers/Auth/actions';
import {validatePass} from 'src/config/Formvalidation';
import {showSnackbar} from 'src/Components/Snackbar';
import {getError} from 'src/config/function';
function NewPassword({navigation, route}) {
  const phoneNumber = route.params.phoneNumber;
  useEffect(() => {
    console.log(phoneNumber);
  });

  const [showPassword, setShowPassword] = useState(true);
  const [password, setPassword] = useState('');
  const inset = useSafeAreaInsets();
  const validateForm = () => {
    const passwordError = validatePass(password);

    if (passwordError) {
      showSnackbar({
        type: 'error',
        header: 'Phone ERROR',
        body: passwordError,
      });
      return false;
    }

    return true;
  };
  const handleSignup = () => {
    console.log('press');
    if (validateForm()) {
      try {
        FORGOT_NEW_PASS({phoneNumber, password});
        navigation.navigate('Login');
      } catch (error) {
        showSnackbar({
          type: 'error',
          header: 'Password ERROR',
          body: getError(error),
        });
      }
    }
  };
  return (
    <View style={[style.main, {paddingTop: inset.top}]}>
      <TouchableOpacity
        style={style.headingIcon2}
        onPress={() => navigation.goBack()}>
        <Icon name="left" color="black" size={25} />
      </TouchableOpacity>
      <Registration
        iconHide
        navigation={navigation}
        HeaderText="Forgot Password"
        barberModule={true}
        InputField={
          <InputField
            Heading="Enter your"
            title="Password"
            placeholder="**************"
            type="password"
            onChangeText={text => setPassword(text)}
            value={password}
            passwordType={showPassword ? true : false}
            icon={
              <TouchableOpacity
                onPress={() => setShowPassword(check => !check)}>
                {showPassword ? (
                  <EyeIcon name="eye-off" color="black" size={20} />
                ) : (
                  <EyeIcon name="eye" color="black" size={20} />
                )}
              </TouchableOpacity>
            }
          />
        }
        Button={
          <Button
            onPress={() => {
              handleSignup();
            }}
            title="Change Password"
            width={250}
            radius={10}
          />
        }
      />
    </View>
  );
}

export default NewPassword;
