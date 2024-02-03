import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Registration from 'src/Components/Registration';
import InputField from 'src/Components/InputFields';
import Button from 'src/Components/Button';
import style from './style';
import EyeIcon from 'react-native-vector-icons/dist/Ionicons';
import Header from 'src/Components/Header';
import {CHANGE_PASSWORD} from 'src/Redux/Reducers/Auth/actions';
import {useSelector} from 'react-redux';
function BarberChangePassword({navigation}) {
  const user = useSelector(s => s.auth.user);
  const [showPassword, setShowPassword] = useState(true);
  const [sPassword, setSPassword] = useState(true);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleChangepass = () => {
    console.log('press');
    const data = {
      oldPassword: oldPassword,
      newPassword: newPassword,
    };

    CHANGE_PASSWORD(user?._id, data, res => {
      if (res.success) {
        navigation.goBack();
      }
    });
  };
  return (
    <View style={[style.main]}>
      <Header />

      <Registration
        iconHide
        navigation={navigation}
        HeaderText="Change Password"
        barberModule={true}
        InputField={
          <View>
            <InputField
              Heading="Enter your"
              title="Old Password"
              placeholder="**************"
              type="password"
              onChangeText={text => setOldPassword(text)}
              value={oldPassword}
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
            <InputField
              Heading="Enter your"
              title="New Password"
              placeholder="**************"
              type="password"
              onChangeText={text => setNewPassword(text)}
              value={newPassword}
              passwordType={sPassword ? true : false}
              icon={
                <TouchableOpacity onPress={() => setSPassword(check => !check)}>
                  {sPassword ? (
                    <EyeIcon name="eye-off" color="black" size={20} />
                  ) : (
                    <EyeIcon name="eye" color="black" size={20} />
                  )}
                </TouchableOpacity>
              }
            />
          </View>
        }
        Button={
          <Button
            onPress={() => {
              handleChangepass();
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

export default BarberChangePassword;
