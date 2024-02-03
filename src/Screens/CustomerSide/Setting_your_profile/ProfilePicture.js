import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import Registration from 'src/Components/Registration';
import InputField from 'src/Components/InputFields';
import Button from 'src/Components/Button';
import AddIcon from 'react-native-vector-icons/dist/AntDesign';
import style from './style';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Text from 'src/Components/Text';
import {launchImageLibrary} from 'react-native-image-picker';
import {UPDATE_USER} from 'src/Redux/Reducers/Auth/actions';
import {useSelector} from 'react-redux';
function ProfilePicture({navigation, route}) {
  const inset = useSafeAreaInsets();
  const profile = route.params?.data;
  const user = useSelector(s => s.auth.user);
  const [selectedImage, setSelectedImage] = useState(null);
  const [about, setAbout] = useState('');
  useEffect(() => {
    console.log(JSON.stringify(profile, null, 2));
  }, [profile]);
  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
      }
    });
  };

  const handleSignup = () => {
    console.log('press');
    const data = {
      name: profile.name,
      dateOfBirth: profile.dob,
      address: profile.address,
      city: profile.city,
      image: {uri: selectedImage},
      about: about,
    };
    const formData = new FormData();

    Object.entries(data).forEach(([name, value]) => {
      formData.append(name, value);
    });
    navigation.navigate('Login');
    UPDATE_USER(user?._id, formData, res => {
      if (res.success) {
        navigation.navigate('Login');
      }
    });
  };
  const data = {
    name: profile.name,
    dateOfBirth: profile.dob,
    address: profile.address,
    city: profile.city,
    image: {uri: selectedImage},
    about: about,
  };
  useEffect(() => {
    console.log(JSON.stringify(data, null, 2));
  }, [data]);
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
        HeaderText="Building Your Profile"
        navigation={navigation}
        barberModule={true}
        InputField={[
          <View style={style.imgview}>
            <Text style={style.p1}>Add your</Text>
            <Text style={style.pp}>Profile Picture</Text>
          </View>,
          <View style={style.pictureView}>
            <View style={style.imagev}>
              <Image source={{uri: selectedImage}} style={style.img} />
            </View>
            <View style={style.subPictureView}>
              <TouchableOpacity style={style.picture} onPress={openImagePicker}>
                <View
                  android_ripple={{color: 'black', borderless: true}}
                  style={style.pictureButton}>
                  <AddIcon name="plus" color="white" size={40} />
                </View>
              </TouchableOpacity>
            </View>
          </View>,
          <InputField
            Heading="Enter"
            title="About Yourself"
            placeholder="Optional"
            onChangeText={text => setAbout(text)}
            value={about}
          />,
        ]}
        Button={
          <Button
            title="Save"
            width={100}
            radius={10}
            onPress={() => {
              handleSignup();
            }}
          />
        }
      />
    </View>
  );
}
export default ProfilePicture;
