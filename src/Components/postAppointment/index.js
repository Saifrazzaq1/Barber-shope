import {FlatList, View, Image} from 'react-native';
import React from 'react';
import styles from './style';
import Text from '../Text';
const PostAppointment = ({data}) => {
  console.log(
    'Data **8***************************************************************',
    JSON.stringify(data, null, 3),
  );
  const formatDate = timestampString => {
    const timestamp = new Date(timestampString);
    const year = timestamp.getFullYear();
    const month = timestamp.getMonth() + 1;
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

  return (
    <View style={{width: '100%', paddingBottom: 10}}>
      <Text
        color="#C4C4C4"
        fontSize={18}
        fontWeight="600"
        fontFamily="Montserrat-Bold"
        style={styles.title}>
        Past Appointment
      </Text>
      <View>
        <FlatList
          style={{
            borderRadius: 10,
            width: '100%',
          }}
          contentContainerStyle={{
            alignItems: 'center',
            width: '100%',
            overflow: 'visible',
          }}
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={postAppointment => {
            return (
              <View style={styles.card}>
                <View style={styles.content}>
                  <Image
                    source={require('../../Assets/barberPic.png')}
                    style={{height: 80, width: 80, borderRadius: 50}}
                  />
                  <View style={styles.textsBody}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: 5,
                      }}>
                      <Text
                        color="#0E0E0E"
                        fontSize={16}
                        fontWeight="600"
                        fontFamily="Montserrat-Bold"
                        style={styles.barberName}>
                        {formatDate(postAppointment.item.appointmentDate)}
                      </Text>
                      <View style={{flexDirection: 'row'}}>
                        <Text
                          color="#0E0E0E"
                          fontSize={18}
                          fontWeight="600"
                          fontFamily="Montserrat-Bold"
                          style={styles.amountTypes}>
                          Rs
                        </Text>
                        <Text
                          color="#0E0E0E"
                          fontSize={20}
                          fontWeight="600"
                          fontFamily="Montserrat-Bold"
                          style={styles.totalAmount}>
                          {postAppointment.item.paymentMethod}
                        </Text>
                      </View>
                    </View>
                    <Text
                      fontSize={16}
                      color="#1C3078"
                      fontWeight="600"
                      fontFamily="Montserrat-Medium"
                      style={styles.barberServices}>
                      {postAppointment.item.services?.[0]?.service?.name},{' '}
                      {postAppointment.item.services?.[1]?.service?.name},{' '}
                      {postAppointment.item.services?.[2]?.service?.name}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        //   backgroundColor: 'red',
                      }}>
                      <Text
                        fontSize={14}
                        color="#0E0E0E"
                        fontWeight="600"
                        fontFamily="Montserrat-Bold"
                        style={styles.barberName}>
                        {postAppointment.item.barbers.name}
                      </Text>
                      <Text
                        fontSize={16}
                        color="#0E0E0E"
                        style={styles.barberMessage}>
                        is your Barber
                        {postAppointment.item.barberMessage}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default PostAppointment;
