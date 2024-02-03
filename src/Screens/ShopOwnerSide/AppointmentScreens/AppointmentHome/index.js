import React, {useState} from 'react';
import {View} from 'react-native';
import styles from './style';
import Header from 'src/Components/Header';
import HeaderCard from 'src/Components/HeaderCard';
import Cards from 'src/Components/Cards';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import PostAppointment from 'src/Components/postAppointment';
import BookCard from 'src/Components/bookAppCard';
// import {useSelector, useDispatch} from 'react-redux';
export default function AppointmentHome({navigation}) {
  // const bookAppointData = useSelector(state => state)
  // const dispatch = useDispatch()
  // const itemsData = item => dispatch({})
  const [bookAppoint, setBookAppoint] = useState([
    {date: '9 Aug 2021'},
    {time: '11:00 AM - 12:30 PM'},
    {services: 'Hair Cut , Beard , Massage'},
    {barberName: 'Lucifer'},
    {barberMessage: 'is your Barber'},
    {moneyType: 'Rs'},
    {amount: '430'},
    {
      cancelAppointment:
        '* You can cancel this booking with up to 1 hour left.',
    },
  ]);
  // setBookAppoint({date: 'Lucifer'});
  console.log(bookAppoint, 'hehe');
  const cardData = [
    {
      date: '9 Aug 2021',
      time: '11:00 AM - 12:30 PM',
      services: 'Hair Cut , Beard , Massage',
      barberName: 'Lucifer',
      barberMessage: 'is your Barber',
      moneyType: 'Rs',
      amount: '430',
      cancelAppointment:
        '* You can cancel this booking with up to 1 hour left.',
    },
    {
      date: '9 Aug 2021',
      time: '11:00 AM - 12:30 PM',
      services: 'Hair Cut , Beard , Massage',
      barberName: 'Lucifer',
      barberMessage: 'is your Barber',
      moneyType: 'Rs',
      amount: '430',
      cancelAppointment:
        '* You can cancel this booking with up to 1 hour left.',
    },
  ];
  const data = [
    {
      date: '9 AUG 2021',
      amountTypes: 'Rs',
      totalAmount: '730',
      barberName: 'Lucifer',
      barberMessage: 'was your Barber',
      image: require('src/Assets/dp.png'),
      barberServices: 'Hair Cut, Beard, Massage',
    },
    {
      date: '9 AUG 2021',
      amountTypes: 'Rs',
      totalAmount: '430',
      barberName: 'Devil',
      barberMessage: 'was your Barber',
      barberServices: 'Hair Cut, Beard, Massage',
      image: require('src/Assets/Ellipse6.png'),
    },
    {
      date: '9 AUG 2021',
      amountTypes: 'Rs',
      totalAmount: '730',
      barberName: 'Devil',
      barberMessage: 'was your Barber',
      barberServices: 'Hair Cut, Beard, Massage',
      image: require('src/Assets/dp.png'),
    },
  ];
  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.main}>
        <Header
          navigation={navigation}
          headerText="Appointment"
          hideIcon={true}
        />
        <View style={{flex: 1}}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('AppointmentDate', {
                // setBookAppoint: setBookAppoint,
                // bookAppoint: bookAppoint,
              })
            }>
            <HeaderCard
              color="#1C3078"
              flexDirection="row"
              source={require('src/Assets/AddList.png')}
              text="Book Appointment"
              textColor="#F5F5F5"
              textFontSize={16}
              textAlign="center"
            />
          </TouchableOpacity>
          <Cards
            title="Pending Request"
            titleColor="grey"
            date="9 Aug 2021"
            time="11:00 AM - 12:30 PM"
            services="services: Hair Cut , Beard , Massage"
            barberName="Lucifer"
            barberMessage="is your Barber"
            moneyType="Rs"
            amount="430"
            appointmentScreen={true}
            cancelAppointment="* You can cancel this booking with up to 1 hour left."
            data={cardData}
          />
          <BookCard
            title="Booked Appointment"
            titleColor="#1C3078"
            cardColor="#F5F5F5"
            date="9 Aug 2021"
            time="11:00 AM - 12:30 PM"
            services="services : "
            servicesProvide="Hair Cut , Beard , Massage"
            barberName="Lucifer"
            barberMessage="is your Barber"
            moneyType="Rs"
            amount="430"
            appointmentScreen={true}
            iconColor="#1C3078"
            cancelAppointment="* You can cancel this booking with up to 1 hour left."
            data={cardData}
          />
          <PostAppointment data={data} />
        </View>
      </View>
    </ScrollView>
  );
}
