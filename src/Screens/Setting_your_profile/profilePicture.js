import React from 'react';
import {Pressable, View} from 'react-native';
import AddIcon from 'react-native-vector-icons/dist/AntDesign';
import Button from 'src/Components/Button';
import InputField from 'src/Components/InputFields';
import Registration from 'src/Components/Registration';
import style from './style';

function ProfilePicture({navigation}) {
  return (
    <View style={style.main}>
      <Registration
        HeaderText="Building Your Profile"
        navigation={navigation}
        InputField={[
          <View style={style.pictureView}>
            <InputField
              hiddenField={true}
              Heading="Add Your"
              title="Profile Picture"
              placeholder="+92 3XX XXXXXXX"
              type="phone-pad"
            />
            <View style={style.subPictureView}>
              <View style={style.picture}>
                <Pressable
                  android_ripple={{color: 'black', borderless: true}}
                  style={style.pictureButton}>
                  <AddIcon name="plus" color="white" size={40} />
                </Pressable>
              </View>
            </View>
          </View>,
          <InputField
            Heading="Enter"
            title="About Yourself"
            placeholder="Optional"
          />,
        ]}
        Button={
          <Button title="Save" width={100} radius={10} onPress={() => {}} />
        }
      />
    </View>
  );
}

export default ProfilePicture;
