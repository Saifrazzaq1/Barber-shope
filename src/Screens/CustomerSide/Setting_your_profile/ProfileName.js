import React, {useState} from 'react';
import {View, Image} from 'react-native';
import Registration from 'src/Components/Registration';
import InputField from 'src/Components/InputFields';
import Button from 'src/Components/Button';
import style from './style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {validateDOB, validateFirstName} from 'src/config/Formvalidation';
import {showSnackbar} from 'src/Components/Snackbar';

function ProfileName({navigation}) {
  const inset = useSafeAreaInsets();
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');

  const formatDOB = input => {
    // Allow only digits
    const cleaned = input.replace(/\D/g, '');

    // Format as DD-MM-YYYY
    const formatted = cleaned
      .slice(0, 8)
      .replace(/^(\d{2})(\d{2})(\d{4})$/, '$1-$2-$3')
      .replace(/^(\d{2})(\d{2})(\d{4})\d*$/, '$1-$2-$3');

    return formatted;
  };

  const handleDOBChange = text => {
    const formattedDOB = formatDOB(text);
    setDob(formattedDOB);
  };

  const validateForm = () => {
    const nameError = validateFirstName(name);
    const dobError = validateDOB(dob);
    if (nameError) {
      showSnackbar({
        type: 'error',
        header: 'Name ERROR',
        body: nameError,
      });
      return false;
    }
    if (dobError) {
      showSnackbar({
        type: 'error',
        header: 'DOB ERROR',
        body: dobError,
      });
      return false;
    }
    return true;
  };

  const handleProfile = () => {
    if (validateForm()) {
      const data = {
        name: name,
        dob: dob,
      };
      navigation.navigate('ProfileAddress', {data});
    }
  };

  return (
    <View style={[style.main, {paddingTop: inset.top}]}>
      <View style={style.headingIcon2}>
        <Image
          style={style.imageIcon2}
          source={require('src/Assets/Arrow.png')}
        />
      </View>
      <Registration
        iconHide
        navigation={navigation}
        HeaderText="Building Your Profile"
        barberModule={true}
        InputField={[
          <InputField
            Heading="Enter your"
            title="Full Name"
            placeholder="Name"
            type=""
            onChangeText={text => setName(text)}
            value={name}
          />,
          <InputField
            Heading="Enter your"
            title="Date of Birth"
            placeholder="DD-MM-YYYY"
            type=""
            onChangeText={text => handleDOBChange(text)}
            value={dob}
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

export default ProfileName;
