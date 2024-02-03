import React from 'react';
import {View, Text, Pressable} from 'react-native';
import Registration from 'src/Components/Registration';
import InputField from 'src/Components/InputFields';
import Button from 'src/Components/Button';
import AddIcon from 'react-native-vector-icons/dist/AntDesign';
import style from './style';
import Icon from 'react-native-vector-icons/dist/AntDesign';

import {createStackNavigator, createAppContainer} from 'react-navigation';
import {color} from 'react-native-reanimated';
import Header from 'src/Components/Header';
function AddPicture({navigation}) {
  return (
    <View style={style.main}>
      <Header navigation={navigation} headerText="Adding NEw Servies" />

      {/* <Registration
        HeaderText="Adding New Services"
        navigation={navigation}
        barberModule={true}
        image={require('')}
        iconButton={<Icon name="left" color="black" size={20} />}
        InputField={[ */}
      <View style={style.pictureView}>
        <InputField
          hiddenField={true}
          Heading="Add"
          title="Picture"
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
      </View>
      <InputField Heading="Enter Service" title="Name" placeholder="Message" />
      <InputField
        Heading="Enter"
        title="About Service"
        placeholder="Description"
      />
      {/* ]} */}
      {/* Button={ */}
      <Button
        title="Next"
        width={'100%'}
        radius={10}
        onPress={() => {
          navigation.navigate('AddTime');
        }}
      />
      {/* } */}
      {/* /> */}
    </View>
  );
}

export default AddPicture;
