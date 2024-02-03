import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import BarberNameCard from 'src/Components/BarberNameCard';
import Cards from 'src/Components/Cards';
import CompleteCard from 'src/Components/CompleteCard';
import Header from 'src/Components/Header';
import HeaderCard from 'src/Components/HeaderCard';
import ServiceCard from 'src/Components/ServicesCard';
import Text from 'src/Components/Text';
import {LayoutAnimate} from 'src/config/function';
import styles from './style';
import {
  ALL_FAQS,
  ALL_SERVICES,
  BARBERS,
  GET_APPOINTMENTS,
} from 'src/Redux/Reducers/Auth/actions';

export default function HomeScreen({navigation}) {
  const [barbers, setBarbers] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [appoint, setAppoint] = useState([]);
  const [services, setServices] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [show, showLess] = useState(false);
  const [showCards, setShowCards] = useState(false);
  const [AppointmentComplete, setAppointmentComplete] = useState(true);

  useEffect(() => {
    BARBERS(res => {
      if (res.success) {
        console.log(JSON.stringify(res, null, 2), 'Barberssssssssssssss');
        setBarbers(res.barbers);
      }
    });
    ALL_SERVICES(res => {
      if (res.success) {
        console.log(JSON.stringify(res, null, 2), 'sssssssssssss');
        setServices(res.services);
      }
    });
    ALL_FAQS(res => {
      if (res.success) {
        console.log(JSON.stringify(res, null, 2), 'FAQs');
        setFaqs(res.faqs);
      }
    });
    const fetchAppointmentsByStatus = status => {
      GET_APPOINTMENTS(status, res => {
        if (res.success) {
          setAppoint(res.appointments[res.appointments.length - 1]);
        }
      });
    };
    fetchAppointmentsByStatus('pending');
    const delayTime = 2000;
    const delayTimer = setTimeout(() => {
      setShowCards(true);
    }, delayTime);
    return () => clearTimeout(delayTimer);
  }, []);
  const barberName = barbers.map(barber => barber.name);
  const dataForDisplay = expanded ? barberName : barberName.slice(0, 2);
  const barberServies = services.map(service => ({
    Name: service.name,
    Rupees: 'RS ' + service.price,
    Time: service.timeConsuming,
    About: service.about,
  }));

  const cardData = {
    date: 'N/A',
    time: '12:00 AM - 12:30 PM',
    services: 'Hair Cut , Beard , Massage',
    barberName: 'Saif',
    barberMessage: 'is your Barber',
    moneyType: 'Rs',
    amount: '450',
    cancelAppointment: '* You can cancel this booking with up to 1 hour left.',
  };

  const [add, setAdd] = useState(false);
  return (
    <View style={{flex: 1}}>
      <ScrollView
        style={styles.main}
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}>
        <View style={{marginHorizontal: 20}}>
          <Header headerText="Home" NoBackIcon hideIcon={true} messageIcon />
        </View>
        <View style={{flex: 1, marginHorizontal: 20}}>
          {showCards ? (
            AppointmentComplete ? (
              <Cards
                data={appoint}
                crossIcon={false}
                cancelAppointment={
                  '* You can cancel this booking with up to 1 hour left.'
                }
                cp={1}
              />
            ) : (
              <CompleteCard
                date="10 Aug 2021"
                time="11:00 AM - 12:30 PM"
                services=" Hair Cut, Beard, Massage"
                barberName="Lucifer"
                barberMessage="is your Barber"
                amount="430"
                data={cardData}
              />
            )
          ) : null}

          <ServiceCard
            flexDirection="column"
            width={250}
            height={130}
            color="#F5F5F5"
            horizontal={true}
            contentDirection="row"
            barberServies={barberServies}
            navigation={navigation}
            setClickAble={false}
            barber={true}
          />
          {AppointmentComplete ? (
            <>
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
                  source={require('../../../../../Assets/barberPic.png')}
                  navigation={navigation}
                  barbersData={barbers}
                />
              </View>

              <Text
                color="#1C3078"
                fontSize={18}
                fontWeight="600"
                fontFamily="Montserrat-Bold"
                style={styles.headerText}>
                FAQ's
              </Text>

              <View
                style={{
                  backgroundColor: '#F5F5F5',
                  width: '100%',
                  paddingHorizontal: 15,
                  borderRadius: 10,
                  marginBottom: 130,
                }}>
                <FlatList
                  data={faqs}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({item}) => (
                    <View>
                      <Text
                        color="#0e0e0e"
                        fontSize={14}
                        fontWeight="400"
                        style={styles.faqQuestion}>
                        {item.question}
                      </Text>
                      <Text
                        color="#0e0e0e"
                        fontSize={14}
                        fontWeight="600"
                        fontFamily="Montserrat-Bold"
                        style={styles.faqAnswer}>
                        {item.answer}
                      </Text>
                    </View>
                  )}
                />
              </View>
            </>
          ) : null}
        </View>
      </ScrollView>
      {add ? (
        <View style={styles.addbtn}>
          <TouchableOpacity
            onPress={() => navigation.navigate('AppointmentDate')}>
            <HeaderCard
              color="#1C3078"
              flexDirection="row"
              source={require('src/Assets/addTag.png')}
              text="Book Appointment"
              textColor="#F5F5F5"
              tintColor="#fff"
              textFontSize={16}
              textAlign="center"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Calender')}>
            <HeaderCard
              color="#1C3078"
              flexDirection="row"
              source={require('src/Assets/AddList.png')}
              text="Current Bookings"
              textColor="#F5F5F5"
              tintColor="#fff"
              textFontSize={16}
              textAlign="center"
            />
          </TouchableOpacity>
        </View>
      ) : null}
      <TouchableOpacity
        style={styles.add}
        onPress={() => {
          setAdd(!add);
          LayoutAnimate(500);
        }}>
        <Image
          style={[
            styles.addimg,
            {
              transform: [{rotate: add ? '45deg' : '0deg'}],
            },
          ]}
          source={require('src/Assets/add.png')}
        />
      </TouchableOpacity>
    </View>
  );
}
