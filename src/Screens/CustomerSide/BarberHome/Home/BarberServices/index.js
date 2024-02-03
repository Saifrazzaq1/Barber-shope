import React, {useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import Header from 'src/Components/Header';
import ServiceCard from 'src/Components/ServicesCard';
import styles from './style';
function BarberHomeServices({route}) {
  const barberServies = route?.params?.barberServies;
  useEffect(() => {
    console.log(barberServies);
  });
  const barberServie = [
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
      Time: '20  minutes',
    },
  ];
  return (
    <ScrollView
      style={styles.main}
      stickyHeaderIndices={[0]}
      showsVerticalScrollIndicator={false}>
      <Header headerText="Services" />
      {/* <TouchableOpacity onPress={() => navigation.navigate('AddServices')}>
          <HeaderCard
            color="#1C3078"
            flexDirection="row"
            source={require('src/Assets/addTag.png')}
            text="Add New Service"
            textColor="#F5F5F5"
            textFontSize={16}
            textAlign="center"
          />
        </TouchableOpacity> */}
      <View style={{marginTop: 20, marginBottom: 120}}>
        <ServiceCard
          flexDirection="column"
          width="100%"
          height={159}
          color="#F5F5F5"
          elevation={0}
          contentDirection="column"
          barberServies={barberServies}
          horizontal={false}
          seeall={false}
          setClickAble={false}
          barber={true}
        />
      </View>
    </ScrollView>
  );
}

export default BarberHomeServices;
