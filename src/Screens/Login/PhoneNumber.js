import React from 'react';
import {View, Text, Image} from 'react-native';
import style from './style';
import InputField from 'src/Components/InputFields';
import Button from 'src/Components/Button';
import Icon from 'react-native-vector-icons/dist/AntDesign';
function PhoneNumber() {
  return (
    <View style={style.main}>
      <View style={style.iconView}>
        <Icon name="left" color="black" size={20} />
      </View>
      <Text style={style.HeaderText}>Login</Text>
      <View style={style.InputField}>
        <InputField
          Heading="Enter your"
          title="Phone Number"
          placeholder="+92 3XX XXXXXXX"
        />
      </View>
      <Button title="Next" width={100} radius={10} />
      <View style={style.imageView}>
        <Image source={require('src/Assets/Barber.png')} style={style.image} />
      </View>
      <View style={style.bottom}>
        <Text style={style.bottomText}>Don't have Account</Text>
        <Text style={style.termConditonText}>Term & condition</Text>
      </View>
    </View>
  );
}

export default PhoneNumber;
