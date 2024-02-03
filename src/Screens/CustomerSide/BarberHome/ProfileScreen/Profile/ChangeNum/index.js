import React, {useState} from 'react';
import {View} from 'react-native';
import Registration from 'src/Components/Registration';
import InputField from 'src/Components/InputFields';
import Button from 'src/Components/Button';
import style from './style';
import Header from 'src/Components/Header';
import {CHANGE_NUMBER} from 'src/Redux/Reducers/Auth/actions';
import {useSelector} from 'react-redux';
function BarberChangeNumber({navigation}) {
  const user = useSelector(s => s.auth.user);
  const [oldnumber, setOldnnumber] = useState('');
  const [newnumber, setNewnumber] = useState('');

  const handleChangeNum = () => {
    console.log('press');
    const data = {
      phoneNumber: oldnumber,
      newPhoneNumber: newnumber,
    };

    CHANGE_NUMBER(user?._id, data, res => {
      if (res.success) {
        navigation.navigate('BabrerOTPChange', {data});
      }
    });
  };
  return (
    <View style={[style.main]}>
      <Header />
      <Registration
        iconHide
        navigation={navigation}
        HeaderText="Change Number"
        barberModule={true}
        InputField={[
          <InputField
            Heading="Enter your"
            title="Old Phone number"
            placeholder="+92 3XX XXXXXXX"
            type=""
            onChangeText={text => setOldnnumber(text)}
            value={oldnumber}
            // Width={50}
          />,
          <InputField
            Heading="Enter your"
            title="New Phone Number"
            placeholder="+92 3XX XXXXXXX"
            type=""
            onChangeText={text => setNewnumber(text)}
            value={newnumber}
            // Width={50}
          />,
        ]}
        Button={
          <Button
            title="Send OTP"
            width={200}
            radius={10}
            onPress={() => {
              handleChangeNum();
            }}
          />
        }
      />
    </View>
  );
}

export default BarberChangeNumber;
