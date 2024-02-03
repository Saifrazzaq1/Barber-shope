import React, {useEffect} from 'react';
import {View, Image, ScrollView} from 'react-native';
import Header from 'src/Components/Header';
import styles from './style';
import Text from 'src/Components/Text';
import HeaderCard from 'src/Components/HeaderCard';
import {heightRef} from 'src/config/screenSize';
import {Rating, AirbnbRating} from 'react-native-ratings';

function BarberProfile({route}) {
  const starImage = require('src/Assets/star.png');
  const barbers = route.params.Barbers;
  useEffect(() => {
    console.log(JSON.stringify(barbers, null, 2), 'Barberssssssssssssss');
  });
  return (
    <ScrollView style={styles.main}>
      <Header headerText="Barber Profile" />
      <View style={styles.profile}>
        <Image
          source={require('src/Assets/Ellipse6.png')}
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text
            fontSize={22}
            color="#0E0E0E"
            fontWeight="600"
            fontFamily="Montserrat-Medium"
            style={styles.nameText}>
            {barbers?.name}
          </Text>
          <Text fontSize={16} color="#1C3078" style={styles.barberTalent}>
            Massage, Hair Cut, Beard
          </Text>
        </View>
      </View>
      <View style={styles.cardsStyle}>
        <HeaderCard
          color="#F5F5F5"
          flexDirection="row"
          source={require('src/Assets/iPhoneX.png')}
          text={barbers?.phoneNumber}
          textColor="#1C3078"
          textFontSize={16}
          textAlign="left"
        />
        <HeaderCard
          color="#F5F5F5"
          flexDirection="row"
          source={require('src/Assets/ContactInfo.png')}
          text="About"
          textColor="#1C3078"
          textFontSize={16}
          textAlign="left"
          textContainerShow={true}
          textContainerColor="#0E0E0E"
          fontContainerSize={14}
          textContainer={barbers?.description}
        />
      </View>
    </ScrollView>
  );
}

export default BarberProfile;
