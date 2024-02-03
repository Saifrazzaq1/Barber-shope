import React, {useState} from 'react';
import {Image, Pressable, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import style from './style';
import EyeIcon from 'react-native-vector-icons/dist/Ionicons';
import Button from 'src/Components/Button';
import InputField from 'src/Components/InputFields';
import Registration from 'src/Components/Registration';
import Text from 'src/Components/Text';
import {LOGIN} from 'src/Redux/Reducers/Auth/actions';
function Login({navigation}) {
  const [passwordScreen, setPasswordScreen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(
    __DEV__ ? '+923075577908' : '',
  );
  const [password, setPassword] = useState(__DEV__ ? '12345678' : '');

  // const validate_f = () => {
  //   var strongRegex = '(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}';

  //   console.log(text);
  //   if (text.match(strongRegex)) {
  //     console.log('password valid');
  //   } else {
  //     console.log('inValid');
  //   }
  // };
  const handleSignin = () => {
    console.log('press');
    // return;
    LOGIN({phoneNumber, password});
  };
  const inset = useSafeAreaInsets();

  return (
    <View style={[style.main, {paddingTop: inset.top}]}>
      {passwordScreen === false ? (
        <View style={style.headingIcon2}>
          <Image
            style={style.imageIcon2}
            source={require('src/Assets/Arrow.png')}
          />
        </View>
      ) : (
        <TouchableOpacity
          style={style.headingIcon2}
          onPress={() => setPasswordScreen(!passwordScreen)}>
          <Icon name="chevron-left" color="black" size={25} />
        </TouchableOpacity>
      )}
      <Registration
        navigation={navigation}
        HeaderText="Login"
        barberModule={true}
        iconHide={true}
        InputField={
          <InputField
            Heading="Enter your"
            title={passwordScreen ? 'Password' : 'Phone Number'}
            placeholder={passwordScreen ? '*************' : '+92 3XX XXXXXXX'}
            type={passwordScreen ? null : 'number-pad'}
            passwordType={passwordScreen && showPassword ? true : false}
            onChangeText={text =>
              passwordScreen ? setPassword(text) : setPhoneNumber(text)
            }
            value={passwordScreen ? password : phoneNumber}
            icon={
              passwordScreen ? (
                <TouchableOpacity
                  onPress={() => setShowPassword(check => !check)}>
                  {showPassword ? (
                    <EyeIcon name="eye-off" color="black" size={20} />
                  ) : (
                    <EyeIcon name="eye" color="black" size={20} />
                  )}
                </TouchableOpacity>
              ) : null
            }
          />
        }
        Button={
          <Button
            title={passwordScreen ? 'Login' : 'Next'}
            width={'28%'}
            radius={15}
            btnheight={60}
            btnborderWidth={0}
            onPress={() => {
              setPasswordScreen(true);
              passwordScreen ? handleSignin() : null;
              // passwordScreen ? validate_f() : null;
            }}
          />
        }
        forgetPassword={
          passwordScreen ? (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ForgetPassord');
              }}>
              <Text style={[style.Text, {marginTop: 5}]}>Forgot Password</Text>
            </TouchableOpacity>
          ) : null
        }
        bottomText={
          passwordScreen ? null : (
            <Pressable
              onPress={() => {
                navigation.navigate('SignUp');
              }}>
              <Text style={style.bottomText}>Don't have Account</Text>
            </Pressable>
          )
        }
      />
    </View>
  );
}

export default Login;
