import React, {useEffect, useState} from 'react';
import {View, Image, FlatList} from 'react-native';
import {heightRef, widthRef} from 'src/config/screenSize';
import Text from '../Text';
import styles from './style';
import CloseIcon from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {GET_APPOINTMENTS} from 'src/Redux/Reducers/Auth/actions';
const formatDate = timestampString => {
  const timestamp = new Date(timestampString);
  const year = timestamp.getFullYear();
  const month = timestamp.getMonth() + 1; // Month is zero-based
  const day = timestamp.getDate();

  return `${year}-${month < 10 ? '0' + month : month}-${
    day < 10 ? '0' + day : day
  }`;
};

const formatTime = timeString => {
  const timest = new Date(timeString);
  const hours = timest.getHours();
  const minutes = timest.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

  return `${formattedHours}:${formattedMinutes} ${ampm}`;
};
export default function Cards({
  title,
  services,
  cp,
  titleColor = '#1C3078',
  appointmentScreen = false,
  cardColor = '#1C3078',
  crossIcon = true,
  iconColor = 'white',
  data,
  cancelAppointment,
}) {
  // const [remove, setRemove] = useState();
  const [barberData, setBarberData] = useState(data);
  const removeItem = id => {
    console.log('yes call it', id);
    let arr = barberData.filter(function (item, idx) {
      return idx !== id;
    });
    setBarberData(arr);
  };
  console.log(
    'data **8***************************************************************',
    JSON.stringify(data, null, 3),
  );
  const [appoint, setAppoint] = useState([]);
  useEffect(() => {
    const fetchAppointmentsByStatus = status => {
      GET_APPOINTMENTS(status, res => {
        if (res.success) {
          setAppoint(res.appointments[res.appointments.length - 1]);
          console.log(
            JSON.stringify(
              res.appointments[res.appointments.length - 1],
              null,
              2,
            ),
            'aaaaaaaaaaaaaaaaaaaaaaaa',
          );
        }
      });
    };
    fetchAppointmentsByStatus('pending');
  }, []);
  return (
    <View>
      <Text
        color={titleColor}
        fontSize={18}
        fontWeight="600"
        fontFamily="Montserrat-Bold"
        style={styles.header}>
        Booked Appointment
      </Text>
      <View>
        {Object.keys(data).length !== 0 ? (
          <View
            style={[
              styles.card,
              {
                backgroundColor: cardColor,
              },
            ]}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                color={cardColor == '#1C3078' ? '#FEFEFE' : '#0E0E0E'}
                fontSize={18}
                style={styles.dateText}>
                {formatDate(data.appointmentDate)}
              </Text>
              {appointmentScreen ? (
                <TouchableOpacity onPress={() => removeItem(index)}>
                  <CloseIcon
                    name="circle-with-cross"
                    size={20}
                    color={iconColor}
                  />
                </TouchableOpacity>
              ) : null}
              {crossIcon === true ? (
                <TouchableOpacity>
                  <Icon
                    name="closecircle"
                    color={cp === 2 ? 'black' : '#FFF'}
                    size={20}
                  />
                </TouchableOpacity>
              ) : null}
            </View>
            <Text
              color={cardColor == '#1C3078' ? '#FEFEFE' : '#0E0E0E'}
              fontSize={18}
              fontWeight="700"
              style={styles.timeText}>
              {formatTime(data.from)} to {formatTime(data.to)}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text
                color={cardColor == '#1C3078' ? '#FEFEFE' : '#0E0E0E'}
                fontSize={14}
                style={styles.messageText}>
                Services: {data.services?.[0]?.service?.name},{' '}
                {data.services?.[1]?.service?.name},{' '}
                {data.services?.[2]?.service?.name}
              </Text>
              {cardColor == '#F5F5F5' ? (
                <Text color="#1C3078">{data.services}</Text>
              ) : null}
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15 * heightRef,
              }}>
              <Image
                source={require('src/Assets/Ellipse6.png')}
                style={styles.image}
              />

              <View style={styles.barberNameView}>
                <Text
                  color={cardColor == '#1C3078' ? '#FEFEFE' : '#1C3078'}
                  fontSize={14}
                  fontWeight="700"
                  style={styles.barberName}>
                  {data?.barbers?.name}
                </Text>
                <Text
                  color={cardColor == '#1C3078' ? '#FEFEFE' : '#1C3078'}
                  fontSize={14}
                  style={styles.barberName}>
                  is your Barber
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}>
              <Text
                color={cardColor == '#1C3078' ? '#FEFEFE' : '#0E0E0E'}
                fontWeight="500"
                fontSize={16}
                style={[
                  styles.barberPayment,
                  {color: cp === 2 ? '#000' : '#fff'},
                ]}>
                Payment{' '}
              </Text>
              <Text
                color={cardColor == '#1C3078' ? '#FEFEFE' : '#0E0E0E'}
                fontSize={16}
                fontWeight="700"
                style={[
                  styles.barberPayment,
                  {color: cp === 2 ? '#000' : '#fff'},
                ]}>
                {data.paymentMethod}
              </Text>
            </View>
            {cp ? (
              <View
                style={{
                  marginTop: 10,
                }}>
                <Text
                  color={cardColor == '#1C3078' ? '#FFD600' : '#BE4949'}
                  style={[
                    styles.cancelAppointment,
                    {
                      color: cp === 1 ? 'yellow' : cp === 2 ? '#BE4949' : null,
                    },
                  ]}>
                  {cancelAppointment}
                </Text>
              </View>
            ) : null}
          </View>
        ) : (
          <View>
            <Text color={'black'} fontWeight="500" fontSize={16}>
              No pending appointments
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}
