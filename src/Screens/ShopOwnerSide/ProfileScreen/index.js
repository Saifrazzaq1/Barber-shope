import React, {useState} from 'react';
import {
  View,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Header from 'src/Components/Header';
import styles from './style';
import Cards from 'src/Components/Cards';
import Text from 'src/Components/Text';
import BarberNameCard from 'src/Components/BarberNameCard';
import ServiceCard from 'src/Components/ServicesCard';
import HeaderCard from 'src/Components/HeaderCard';
import {Card} from 'react-native-shadow-cards';
import BookCard from 'src/Components/bookAppCard';
import Button from 'src/Components/Button';

export default function Home({navigation}) {
  const barberName = ['Raheem', 'Karim', 'Nadeem', 'Saqib', 'Usman'];
  const [expanded, setExpanded] = useState(false);
  const [show, showLess] = useState(false);

  const dataForDisplay = expanded ? barberName : barberName.slice(0, 2);
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
  ];
  const barberServies = [
    {
      Name: 'Hair Cut',
      Rupees: 'RS 450',
      Time: '45 minutes',
    },
    {
      Name: 'Beard',
      Rupees: 'RS 300',
      Time: '30 minutes',
    },
    {
      Name: 'Massage',
      Rupees: 'RS 500',
      Time: '1 hours',
    },
    {
      Name: 'Hair Massage',
      Rupees: 'RS 1500',
      Time: '20 minutes',
    },
    {
      Name: 'Face Scurb',
      Rupees: 'RS 250',
      Time: '10  minutes',
    },
  ];

  return (
    <ScrollView contentContainerStyle={{backgroundColor: '#E5E5E5'}}>
      <View style={styles.main}>
        <Header headerText="hoome" hideIcon={true} />
        <View style={{flex: 1}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('AppointmentDate')}>
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
            title="Booked Appointment"
            date="9 Aug 2021"
            time="11:00 AM - 12:30 PM"
            services="services: Hair Cut , Beard , Massage"
            barberName="Lucifer"
            barberMessage="is your Barber"
            moneyType="Rs"
            amount="430"
            data={cardData}
            // cancelAppointment="* You can cancel this booking with up to 1 hour left."
          />

          <ServiceCard
            flexDirection="column"
            width={250}
            height={159}
            color="#F5F5F5"
            elevation={5}
            horizontal={true}
            contentDirection="row"
            barberServies={barberServies}
            navigation={navigation}
            setClickAble={false}
          />

          <View style={([styles.servicesView], {flexDirection: 'column'})}>
            <BarberNameCard
              headerText="Barber's"
              flexDirection="row"
              color="#F5F5F5"
              showSeeAll={true}
              setExpanded={setExpanded}
              showLess={showLess}
              show={show}
              elevation={5}
              dataForDisplay={dataForDisplay}
              source={require('src/Assets/Ellipse6.png')}
              navigation={navigation}
            />
          </View>

          <Card
            style={{
              backgroundColor: '#F5F5F5',
              width: '100%',
              elevation: 0,
              paddingHorizontal: 10,
              paddingBottom: 10,
            }}>
            <View>
              <Text color="#0e0e0e" fontSize={14} style={styles.faqQuestion}>
                What is the timing of Shop?
              </Text>
              <Text
                color="#0e0e0e"
                fontSize={14}
                bold="bold"
                style={styles.faqAnswer}>
                11:00 AM to 02:30 AM
              </Text>
              <Text color="#0e0e0e" fontSize={14} style={styles.faqQuestion}>
                What is the timing of Shop?
              </Text>
              <Text
                color="#0e0e0e"
                fontSize={14}
                bold="bold"
                style={styles.faqAnswer}>
                11:00 AM to 02:30 AM
              </Text>
              <Text color="#0e0e0e" fontSize={14} style={styles.faqQuestion}>
                What is the timing of Shop?
              </Text>
              <Text
                color="#0e0e0e"
                fontSize={14}
                bold="bold"
                style={styles.faqAnswer}>
                11:00 AM to 02:30 AM
              </Text>
            </View>
          </Card>
        </View>
      </View>
    </ScrollView>
  );
}
