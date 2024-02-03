import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import EyeIcon from 'react-native-vector-icons/dist/Ionicons';
import Button from 'src/Components/Button';
import InputField from 'src/Components/InputFields';
import Registration from 'src/Components/Registration';
import {widthRef} from 'src/config/screenSize';
import style from './style';
import {SETPASSWORD} from 'src/Redux/Reducers/Auth/actions';
import {validatePass} from 'src/config/Formvalidation';
import {showSnackbar} from 'src/Components/Snackbar';
import {getError} from 'src/config/function';

function NewPassword({navigation, route}) {
  const inset = useSafeAreaInsets();
  const [showPassword, setShowPassword] = useState(true);
  const [password, setPassword] = useState('');
  const phoneNumber = route.params.phoneNumber;
  useEffect(() => {
    console.log(phoneNumber);
  }, [phoneNumber]);
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
    if (validateForm()) {
      const data = {
        phone: phoneNumber,
        password: password,
      };
      console.log('press');
      try {
        SETPASSWORD({phoneNumber, password});
        navigation.navigate('SettingYourProfile');
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
        onPress={() => {
          navigation.goBack();
        }}>
        <Icon name="chevron-left" color="black" size={25} />
      </TouchableOpacity>
      <Registration
        iconHide
        navigation={navigation}
        HeaderText="SignUp"
        barberModule={true}
        InputField={
          <InputField
            Heading="Enter your"
            title="Password"
            placeholder="**************"
            type="password"
            passwordType={showPassword ? true : false}
            onChangeText={text => setPassword(text)}
            value={password}
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
            title="Set Password"
            width={200 * widthRef}
            radius={10}
          />
        }
      />
    </View>
  );
}

export default NewPassword;
