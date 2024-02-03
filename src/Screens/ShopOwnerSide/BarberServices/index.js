import React from 'react';
import {View} from 'react-native';
import Header from 'src/Components/Header';
import styles from './style';
import ServiceCard from 'src/Components/ServicesCard';
function BarberServices() {
  const barberServies = [
    {
      Name: 'Hair Cut',
      Text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      Rupees: 'RS 450',
      Time: '45 minutes',
    },
    {
      Name: 'Beard',
      Text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',

      Rupees: 'RS 300',
      Time: '30 minutes',
    },
    {
      Name: 'Massage',
      Text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',

      Rupees: 'RS 500',
      Time: '1 hours',
    },
    {
      Name: 'Hair Massage',
      Text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',

      Rupees: 'RS 1500',
      Time: '20 minutes',
    },
    {
      Name: 'Face Scurb',
      Text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',

      Rupees: 'RS 250',
      Time: '10  minutes',
    },
  ];
  return (
    <View style={styles.main}>
      <Header headerText="Services" />
      <ServiceCard
        flexDirection="column"
        width="100%"
        height={159}
        color="#F5F5F5"
        elevation={10}
        contentDirection="column"
        barberServies={barberServies}
        horizontal={false}
        seeall={false}
        setClickAble={false}
      />
    </View>
  );
}

export default BarberServices;
