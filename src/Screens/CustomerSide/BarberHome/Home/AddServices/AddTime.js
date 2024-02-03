import {Platform, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Text from 'src/Components/Text';
import styles from './style';
import Header from 'src/Components/Header';
import InputField from 'src/Components/InputFields';
import DownIcon from 'react-native-vector-icons/dist/AntDesign';
// import Button from 'src/Components/Button';
import HeaderCard from 'src/Components/HeaderCard';
import Modal from 'react-native-modal';
import CloseIcon from 'react-native-vector-icons/dist/AntDesign';
import Button from 'src/Components/Button';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import RNDateTimePicker from '@react-native-community/datetimepicker';
import DateTimePicker from '@react-native-community/datetimepicker';
export default function AddTime({navigation}) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedHours, setSelectedHours] = useState(0);
  const [selectedMinutes, setSelectedMinutes] = useState(0);
  const [date, setDate] = useState(new Date(new Date().getTime()));
  const [isPickerShow, setIsPickerShow] = useState(false);
  const onChange = (event, values) => {
    setDate(values);
    if (Platform.OS === 'android') {
      setIsPickerShow(false);
    }
    console.log(values, 'Values');
  };
  // const
  console.log(date.toLocaleTimeString());
  return (
    <View style={styles.mainTime}>
      <Header navigation={navigation} headerText="Book Appointment" />
      <InputField
        Heading="Select"
        title="Time Slot"
        placeholder="01:00 PM to 03:00 PM"
        value={date.toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
        })}
        // onFocus={}
        // value="Lucifer"
        icon={
          <TouchableOpacity onPress={() => setIsPickerShow(check => !check)}>
            <DownIcon name="circledown" color="#1C3078" size={20} />
          </TouchableOpacity>
        }
        rest={
          isPickerShow && (
            <DateTimePicker
              value={date}
              mode={'time'}
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              is24Hour={false}
              onChange={onChange}
              style={{
                width: 320,
                height: 260,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
              }}
            />
          )
        }
      />
      <InputField
        Heading="Enter"
        title="Price"
        placeholder="01:00 PM to 03:00 PM"
      />
      <TouchableOpacity onPress={() => setModalVisible(check => !check)}>
        <HeaderCard
          color="#1C3078"
          flexDirection="row"
          source={require('src/Assets/AddList.png')}
          text="Save"
          textColor="#F5F5F5"
          textFontSize={20}
          textAlign="center"
          showButton={true}
        />
      </TouchableOpacity>
    </View>
  );
}
