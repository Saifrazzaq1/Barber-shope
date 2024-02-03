import DateTimePicker from '@react-native-community/datetimepicker';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, Platform, Text, TouchableOpacity, View} from 'react-native';
import Button from 'src/Components/Button';
import Header from 'src/Components/Header';
import InputField from 'src/Components/InputFields';
import styles from './style';

export default function AppointmentDate({route}) {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const navigation = useNavigation();

  const formattedDate = `${('0' + date.getDate()).slice(-2)} ${(
    '0' +
    (date.getMonth() + 1)
  ).slice(-2)} ${date.getFullYear()}`;

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (selectedDate) {
      setDate(selectedDate);
    }
    setShowDatePicker(false);
  };

  const renderIOSButtons = () => {
    return (
      <View style={styles.iosButtonsContainer}>
        <TouchableOpacity onPress={() => setShowDatePicker(false)}>
          <Text style={styles.cancelButton}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDateChange()}>
          <Text style={styles.okButton}>OK</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.main}>
      <View style={styles.body}>
        <Header headerText="Book Appointment" />
        <TouchableOpacity onPress={() => setShowDatePicker(true)}>
          <InputField
            Heading="Select"
            title="Date"
            value={formattedDate}
            placeholder="DD MM YYYY"
            editable={false}
            viewHeight={70}
            paddingH={24}
            rest={
              <Image
                source={require('../../../../../Assets/Calendar.png')}
                style={styles.icon}
              />
            }
          />
        </TouchableOpacity>

        {showDatePicker && Platform.OS === 'ios' && renderIOSButtons()}

        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="spinner"
            onChange={handleDateChange}
            minimumDate={new Date(1950, 0, 1)}
            maximumDate={new Date(2030, 10, 20)}
          />
        )}
        <View style={{marginTop: 10}}>
          <Button
            title="Next"
            width="100%"
            btnheight={70}
            radius={20}
            onPress={() => navigation.navigate('AppointmentServices', {date})}
          />
        </View>
      </View>
    </View>
  );
}
