import React, {useState} from 'react';
import {View, Pressable, TouchableOpacity} from 'react-native';
import Registration from 'src/Components/Registration';
import InputField from 'src/Components/InputFields';
import DownIcon from 'react-native-vector-icons/dist/AntDesign';
import Button from 'src/Components/Button';
import style from './style';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {validateAddress, validateCity} from 'src/config/Formvalidation';
import {showSnackbar} from 'src/Components/Snackbar';

function ProfileAddress({route}) {
  const profile = route.params?.data;
  console.log(profile, 'aaaaaaaaaa');
  const inset = useSafeAreaInsets();
  const navigation = useNavigation();
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const validateForm = () => {
    const addressError = validateAddress(address);
    const cityError = validateCity(city);
    if (addressError) {
      showSnackbar({
        type: 'error',
        header: 'Address ERROR',
        body: addressError,
      });
      return false;
    }
    if (cityError) {
      showSnackbar({
        type: 'error',
        header: 'City ERROR',
        body: cityError,
      });
      return false;
    }
    return true;
  };

  const handleProfile = () => {
    if (validateForm()) {
      const data = {
        address: address,
        city: city,
        name: profile.name,
        dob: profile.dob,
      };
      navigation.navigate('ProfilePicture', {data});
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
        HeaderText="Building Your Profile"
        barberModule={true}
        InputField={[
          <InputField
            Heading="Enter your"
            title="Address"
            placeholder="Block, Unit No, Town"
            type=""
            onChangeText={text => setAddress(text)}
            value={address}
          />,
          <InputField
            Heading="Enter your"
            title="City"
            placeholder="Lahore,Punjab"
            onChangeText={text => setCity(text)}
            value={city}
          />,
        ]}
        Button={
          <Button
            title="Next"
            width={100}
            radius={10}
            onPress={() => {
              handleProfile();
            }}
          />
        }
      />
    </View>
  );
}

export default ProfileAddress;
