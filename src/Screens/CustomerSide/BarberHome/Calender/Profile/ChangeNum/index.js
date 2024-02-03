import React from 'react';
import {View, Text, Pressable} from 'react-native';
import Registration from 'src/Components/Registration';
import InputField from 'src/Components/InputFields';
import Button from 'src/Components/Button';
import style from './style';
import Icon from 'react-native-vector-icons/dist/AntDesign';

import {createStackNavigator, createAppContainer} from 'react-navigation';
function BarberChangeNumber({navigation}) {
  return (
    <View style={style.main}>
      <Registration
        navigation={navigation}
        HeaderText="Change Number"
        barberModule={true}
        iconButton={<Icon name="left" color="black" size={20} />}
        image={require('src/Assets/barberRegistration.png')}
        InputField={[
          <InputField
            Heading="Enter your"
            title="Old Phone number"
            placeholder="+92 3XX XXXXXXX"
            type=""
            // Width={50}
          />,
          <InputField
            Heading="Enter your"
            title="New Phone Number"
            placeholder="+92 3XX XXXXXXX"
            type=""
            // Width={50}
          />,
        ]}
        Button={
          <Button
            title="Send OTP"
            width={200}
            radius={10}
            onPress={() => {
              navigation.navigate('BabrerOTPChange');
            }}
          />
        }
      />
    </View>
  );
}

export default BarberChangeNumber;
