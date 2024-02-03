import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import EyeIcon from 'react-native-vector-icons/dist/Ionicons';
import Button from 'src/Components/Button';
import InputField from 'src/Components/InputFields';
import Registration from 'src/Components/Registration';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import style from './style';
import {widthRef} from 'src/config/screenSize';
function ChangePassword({navigation}) {
  const inset = useSafeAreaInsets();
  const [showPassword, setShowPassword] = useState(true);
  const [n_showPassword, n_setShowPassword] = useState(true);
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
        HeaderText="Login"
        barberModule={true}
        Heading="Enter your"
        title="Old Password"
        placeholder="**************"
        passwordType={showPassword ? true : false}
        InputField={[
          <InputField
            Heading="Enter your"
            title="Old Password"
            placeholder="**************"
            passwordType={showPassword ? true : false}
            icon={
              <TouchableOpacity
                onPress={() => setShowPassword(check => !check)}>
                <EyeIcon
                  name={showPassword ? 'eye' : 'eye-off'}
                  color="black"
                  size={20}
                />
              </TouchableOpacity>
            }
          />,
          <InputField
            Heading="Enter your"
            title="New Password"
            placeholder="**************"
            passwordType={n_showPassword ? true : false}
            icon={
              <TouchableOpacity
                onPress={() => n_setShowPassword(check => !check)}>
                <EyeIcon
                  name={n_showPassword ? 'eye' : 'eye-off'}
                  color="black"
                  size={20}
                />
              </TouchableOpacity>
            }
          />,
        ]}
        Button={
          <Button
            title="Change Password"
            width={200 * widthRef}
            radius={10}
            onPress={() => {
              navigation.navigate('Setting');
            }}
          />
        }
      />
    </View>
  );
}

export default ChangePassword;
