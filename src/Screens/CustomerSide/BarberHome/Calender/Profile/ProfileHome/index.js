import React, {useEffect, useMemo, useState} from 'react';
import {FlatList, ScrollView, TouchableOpacity, View} from 'react-native';
import Cards from 'src/Components/Cards';
import Header from 'src/Components/Header';
import styles from './style';
import PostAppointment from 'src/Components/postAppointment';
import {GET_APPOINTMENTS} from 'src/Redux/Reducers/Auth/actions';
import CardItem from 'src/Components/Carditems';
import Text from 'src/Components/Text';

export default function BarberProfile({navigation}) {
  const [pending, setPendig] = useState([]);
  const [booked, setBooked] = useState([]);
  const [past, setPast] = useState([]);
  useEffect(() => {
    const fetchAppointmentsByStatus = status => {
      GET_APPOINTMENTS(status, res => {
        if (res.success) {
          console.log(JSON.stringify(res, null, 2), 'Pendig Appointments');
          setPendig(res.appointments);
        }
      });
    };
    fetchAppointmentsByStatus('pending');
    const fetchAppointmentsBybooked = status => {
      GET_APPOINTMENTS(status, res => {
        if (res.success) {
          console.log(JSON.stringify(res, null, 2), 'Booked Appointments');
          setBooked(res.appointments);
        }
      });
    };
    fetchAppointmentsBybooked('booked');
    const fetchAppointmentsBypast = status => {
      GET_APPOINTMENTS(status, res => {
        if (res.success) {
          console.log(JSON.stringify(res, null, 2), 'Past Appointments');
          setPast(res.appointments);
        }
      });
    };
    fetchAppointmentsBypast('past');
  }, []);

  const [value, setValue] = useState(0);

  const tabs = ['Pending', 'Booked', 'Past'];

  console.log('🚀 ~ file: index.js:50 ~ BarberProfile ~ value:', value);

  return (
    <View style={styles.main}>
      <Header headerText="Appointment" hideIcon={true} messageIcon NoBackIcon />

      <View style={styles.tabsView}>
        <FlatList
          horizontal={true}
          data={tabs}
          nestedScrollEnabled
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => setValue(index)}
              style={[
                styles.tabs,
                {backgroundColor: index === value ? '#1C3078' : '#FFF'},
              ]}>
              <Text
                fontFamily="Montserrat-Bold"
                style={[
                  styles.tabText,
                  {color: index === value ? '#FFF' : '#9F9F9F'},
                ]}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled>
        {value === 0 ? (
          <View style={{flex: 1}}>
            <Text
              fontSize={18}
              fontWeight="600"
              color="#C4C4C4"
              fontFamily="Montserrat-Bold"
              style={styles.title}>
              Pending Requests
            </Text>
            <CardItem
              titleColor="#C4C4C4"
              date="9 Aug 2021"
              time="11:00 AM - 12:30 PM"
              services="services: Hair Cut , Beard , Massage"
              barberName="Lucifer"
              barberMessage="is your Barber"
              amount="430"
              data={pending}
              cp={1}
              cancelAppointment={
                '* You can cancel this booking with up to 1 hour left.'
              }
            />
          </View>
        ) : value === 1 ? (
          <View style={{flex: 1}}>
            <Text
              fontSize={18}
              fontWeight="600"
              color="#C4C4C4"
              fontFamily="Montserrat-Bold"
              style={styles.title}>
              Book Appointment
            </Text>
            <CardItem
              titleColor="#C4C4C4"
              cardColor="#F5F5F5"
              data={booked}
              cp={2}
              cancelAppointment={
                '* You can cancel this booking with up to 1 hour left.'
              }
            />
          </View>
        ) : value === 2 ? (
          <PostAppointment data={past} />
        ) : null}
      </ScrollView>
    </View>
  );
}
