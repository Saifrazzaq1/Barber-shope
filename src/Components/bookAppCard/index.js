import React, {useState} from 'react';
import {View, Image, FlatList} from 'react-native';
import {Card} from 'react-native-shadow-cards';
import {heightRef, widthRef} from 'src/config/screenSize';
import Text from '../Text';
import styles from './style';
import CloseIcon from 'react-native-vector-icons/Entypo';
import {TouchableOpacity} from 'react-native-gesture-handler';
export default function BookCard({
  title,
  date,
  time,
  services,
  barberName,
  barberMessage,
  moneyType,
  amount,
  cancelAppointment,
  titleColor = '#1C3078',
  appointmentScreen = false,
  cardColor = '#1C3078',
  servicesProvide = '',
  iconColor = 'white',
  data,
}) {
  // const [remove, setRemove] = useState();
  const [barberData, setBarberData] = useState(data);
  const removeItem = id => {
    console.log('yes call it', id);
    let arr = barberData.filter(function (item, index) {
      return index !== id;
    });
    setBarberData(arr);
  };
  return (
    <View>
      <Text color={titleColor} fontSize={18} style={styles.header}>
        {title}
      </Text>
      <View>
        <FlatList
          style={{width: '100%', overflow: 'visible'}}
          data={barberData}
          keyExtractor={item => item.id}
          ListEmptyComponent={() => (
            <Text color="grey" style={{textAlign: 'center'}}>
              No Appointment are booked
            </Text>
          )}
          renderItem={({item, index}) => {
            return (
              <Card style={[styles.card, {backgroundColor: cardColor}]}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text
                    color={cardColor == '#1C3078' ? '#FEFEFE' : '#0E0E0E'}
                    fontSize={18}
                    bold="bold"
                    style={styles.dateText}>
                    {item.date}
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
                </View>
                <Text
                  color={cardColor == '#1C3078' ? '#FEFEFE' : '#0E0E0E'}
                  fontSize={18}
                  style={styles.timeText}>
                  {item.time}
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    color={cardColor == '#1C3078' ? '#FEFEFE' : '#0E0E0E'}
                    fontSize={14}
                    style={styles.messageText}>
                    {services}
                  </Text>
                  {cardColor == '#F5F5F5' ? (
                    <Text color="#1C3078">{item.services}</Text>
                  ) : null}
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    // backgroundColor: 'red',
                    marginVertical: 15 * heightRef,
                  }}>
                  <Image
                    source={require('src/Assets/Ellipse6.png')}
                    style={styles.image}
                  />
                  <View style={styles.barberNameView}>
                    <Text
                      color={cardColor == '#1C3078' ? '#FEFEFE' : '#1C3078'}
                      fontSize={14}
                      bold="bold"
                      style={styles.barberName}>
                      {item.barberName}
                    </Text>
                    <Text
                      color={cardColor == '#1C3078' ? '#FEFEFE' : '#1C3078'}
                      fontSize={14}
                      style={styles.barberName}>
                      {item.barberMessage}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    // backgroundColor: 'red',
                    justifyContent: 'flex-end',
                  }}>
                  <Text
                    color={cardColor == '#1C3078' ? '#FEFEFE' : '#0E0E0E'}
                    fontSize={18}
                    bold="bold"
                    style={styles.barberPayment}>
                    {item.moneyType}
                  </Text>
                  <Text
                    color={cardColor == '#1C3078' ? '#FEFEFE' : '#0E0E0E'}
                    fontSize={22}
                    bold="bold"
                    style={styles.barberPayment}>
                    {item.amount}
                  </Text>
                </View>
                <View>
                  {appointmentScreen ? (
                    <Text
                      color={cardColor == '#1C3078' ? '#FFD600' : '#BE4949'}
                      fontSize={19}
                      style={styles.cancelAppointment}>
                      {item.cancelAppointment}
                    </Text>
                  ) : null}
                </View>
              </Card>
            );
          }}
        />
      </View>
    </View>
  );
}
