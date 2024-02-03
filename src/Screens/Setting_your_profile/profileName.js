import React from 'react';
import {View, Text, Pressable} from 'react-native';
import Registration from 'src/Components/Registration';
import InputField from 'src/Components/InputFields';
import Button from 'src/Components/Button';
import style from './style';
import Icon from 'react-native-vector-icons/dist/AntDesign';

import {createStackNavigator, createAppContainer} from 'react-navigation';
function ProfileName({navigation}) {
  return (
    <View style={style.main}>
      <Registration
        navigation={navigation}
        HeaderText="Building Your Profile"
        // iconButton={<Icon name="left" color="black" size={20} />}
        InputField={[
          <InputField
            Heading="Enter your"
            title="Full Name"
            placeholder="Lucifer"
            type=""
          />,
          <InputField
            Heading="Enter your"
            title="Date of Birth"
            placeholder="21-sep-2021"
            type=""
          />,
        ]}
        Button={
          <Button
            title="Next"
            width={100}
            radius={10}
            onPress={() => {
              navigation.navigate('ProfileAddress');
            }}
          />
        }
      />
    </View>
  );
}

export default ProfileName;
