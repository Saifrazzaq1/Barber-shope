import React from 'react';
import {View, Text, Pressable} from 'react-native';
import Registration from 'src/Components/Registration';
import InputField from 'src/Components/InputFields';
import Button from 'src/Components/Button';
import style from './style';
import DownIcon from 'react-native-vector-icons/dist/AntDesign';
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
            title="Address"
            placeholder="Block no Town"
            type=""
          />,
          <InputField
            Heading="Enter your"
            title="City"
            placeholder="Lahore,Punjabe"
            icon={<DownIcon name="down" color="black" size={20} />}
          />,
        ]}
        Button={
          <Button
            title="Next"
            width={100}
            radius={10}
            onPress={() => {
              navigation.navigate('ProfilePicture');
            }}
          />
        }
      />
    </View>
  );
}

export default ProfileName;
