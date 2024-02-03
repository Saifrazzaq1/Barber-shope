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
import {heightRef, widthRef} from 'src/config/screenSize';
import {useSelector} from 'react-redux';
import {BOOK_APPOINTMET} from 'src/Redux/Reducers/Auth/actions';
export default function AppointmentTime({navigation, route}) {
  const mydata = route.params.ndata;
  const user = useSelector(s => s.auth.user);
  console.log(JSON.stringify(mydata, null, 2), 'nndata');
  const [isModalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = useState(false);
  const [date, setDate] = useState(new Date(new Date().getTime()));
  const [newdate, setNewdate] = useState(new Date(new Date().getTime()));
  const [isPickerShow, setIsPickerShow] = useState(false);
  const onChange = (event, values) => {
    setDate(values);
    const newDate = new Date(values);
    newDate.setHours(newDate.getHours() + 1);

    setNewdate(newDate);
    setSelected(true);
    if (Platform.OS === 'android') {
      setIsPickerShow(false);
    }
    setIsPickerShow(false);
    console.log(values, 'Values');
  };

  // const
  console.log(date.toLocaleTimeString('en-US', {hour12: false}), 'time');
  console.log(newdate.toLocaleTimeString('en-US', {hour12: false}), 'newtime');

  const data = {
    appointmentDate: mydata.data.date,
    userId: user._id,
    services: mydata.data.services,
    barberId: mydata.barberId,
    startTime: date,
    endTime: newdate,
    paymentMethod: 'cash',
  };
  console.log(JSON.stringify(data, null, 2), 'mmmmmmmmmmmmmmmmmmmmmmmmm');
  // const handleappoint = () => {

  // };
  const handleappoint = () => {
    const data = {
      appointmentDate: mydata.data.date,
      userId: user._id,
      services: mydata.data.services,
      barberId: mydata.barberId,
      startTime: date,
      endTime: newdate,
      paymentMethod: 'cash',
    };

    console.log(JSON.stringify(data, null, 2), 'mmmmmmmmmmmmmmmmmmmmmmmmm');
    BOOK_APPOINTMET(data, response => {
      console.log('API response:', response);
      if (response.success) {
        navigation.navigate('HomeScreen');
      }
    });
  };
  return (
    <View style={styles.main}>
      <View style={{flex: 1, paddingHorizontal: 24}}>
        <Header navigation={navigation} headerText="Book Appointment" />
        <Text fontSize={16} fontWeight="500" style={styles.modalTitle}>
          Select
        </Text>
        <Text fontSize={24} fontWeight="600" style={styles.text}>
          Time Slot
        </Text>
        <View style={styles.select}>
          {selected ? (
            <View style={styles.times}>
              <Text fontSize={24} fontWeight="400" color="#0E0E0E">
                {date.toLocaleTimeString('en-US', {
                  hour: 'numeric',
                  minute: 'numeric',
                  hour12: true,
                })}{' '}
              </Text>
              <Text fontSize={24} fontWeight="400" color="#0E0E0E">
                to{' '}
                {newdate.toLocaleTimeString('en-US', {
                  hour: 'numeric',
                  minute: 'numeric',
                  hour12: true,
                })}
              </Text>
            </View>
          ) : (
            <Text fontSize={20} fontWeight="400">
              11:00 AM to 12:00 PM
            </Text>
          )}

          <TouchableOpacity onPress={() => setIsPickerShow(check => !check)}>
            <DownIcon name="circledown" color="#1C3078" size={30} />
          </TouchableOpacity>
        </View>
        {isPickerShow && (
          <DateTimePicker
            value={date}
            mode={'time'}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            is24Hour={false}
            onChange={onChange}
            style={{
              width: 300,
              height: 260,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        )}

        <TouchableOpacity
          onPress={() => setModalVisible(check => !check)}
          style={{
            height: 70 * heightRef,
            backgroundColor: '#1C3078',
            borderRadius: 20,
            marginTop: 41 * heightRef,
            justifyContent: 'center',
            paddingHorizontal: 10 * widthRef,
          }}>
          <HeaderCard
            flexDirection="row"
            source={require('src/Assets/AddList.png')}
            text="Save"
            textColor="white"
            tintColor="white"
            textFontSize={18}
            textAlign="center"
            showButton={true}
            btnHight={70}
          />
        </TouchableOpacity>
        <View>
          <Modal
            transparent={true}
            style={{
              // backgroundColor: 'white',
              // borderRadius: 50,
              // width: '70%',
              alignSelf: 'center',
              // height: 100,
              flex: 1,
            }}
            coverScreen={true}
            isVisible={isModalVisible}
            swipeDirection="Right">
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',

                // backgroundColor: 'rgba(0,0,0,0.5)',
              }}>
              <View
                style={{
                  width: 350 * widthRef,
                  height: 320 * heightRef,
                  borderRadius: 20,
                  backgroundColor: 'white',

                  padding: 20,
                }}>
                <View style={{alignItems: 'flex-end'}}>
                  <CloseIcon
                    name="closecircle"
                    size={30}
                    color="#1C3078"
                    onPress={() => setModalVisible(check => !check)}
                  />
                </View>
                <Text
                  color="#1C3078"
                  fontSize={16}
                  fontWeight="500"
                  style={styles.modalTitle}>
                  Please be in notice
                </Text>
                <View style={{}}>
                  <Text fontWeight="400" color="#0E0E0E" fontSize={22}>
                    This appointment will be{' '}
                  </Text>
                  <Text fontWeight="700" fontSize={24} color="#0E0E0E">
                    booked after the approval{' '}
                  </Text>
                  <Text fontWeight="400" color="#0E0E0E" fontSize={22}>
                    by the Barber!
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    flex: 1,
                    justifyContent: 'space-between',
                    marginTop: 16,
                  }}>
                  <Button
                    title="Discard"
                    width={160}
                    btnheight={70}
                    radius={20}
                    Color="white"
                    onPress={() => setModalVisible(check => !check)}
                  />
                  <Button
                    title="Save"
                    width={160}
                    radius={20}
                    btnheight={70}
                    // onPress={() => setModalVisible(check => !check)}
                    onPress={() => handleappoint()}
                  />
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </View>
  );
}
