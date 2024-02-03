// CardItem.js
import React from 'react';
import {View, Image, FlatList} from 'react-native';
import Text from '../Text';
import styles from './style';
import CloseIcon from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {heightRef} from 'src/config/screenSize';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

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

const CardItem = ({
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
}) => {
  console.log(
    'Data **8***************************************************************',
    JSON.stringify(data, null, 3),
  );
  const inset = useSafeAreaInsets();
  return (
    <View style={{paddingBottom: inset.top + 20}}>
      <Text
        color={titleColor}
        fontSize={18}
        fontWeight="600"
        fontFamily="Montserrat-Bold"
        style={styles.header}>
        {title}
      </Text>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <View>
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
                  {formatDate(item?.appointmentDate)}
                </Text>
                {appointmentScreen ? (
                  <TouchableOpacity onPress={removeItem}>
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
                {formatTime(item?.from)} to {formatTime(item?.to)}
              </Text>
              <View style={{flexDirection: 'row'}}>
                {cardColor == '#F5F5F5' ? (
                  <Text color="#1C3078">
                    {' '}
                    Services: {item.services?.[0]?.service?.name},{' '}
                    {item.services?.[1]?.service?.name},{' '}
                    {item.services?.[2]?.service?.name}
                  </Text>
                ) : (
                  <Text
                    color={cardColor == '#1C3078' ? '#FEFEFE' : '#0E0E0E'}
                    fontSize={14}
                    style={styles.messageText}>
                    Services: {item.services?.[0]?.service?.name},{' '}
                    {item.services?.[1]?.service?.name},{' '}
                    {item.services?.[2]?.service?.name}
                  </Text>
                )}
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
                    {item?.barbers?.name}
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
                  {item?.paymentMethod}
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
                        color:
                          cp === 1 ? 'yellow' : cp === 2 ? '#BE4949' : null,
                      },
                    ]}>
                    {cancelAppointment}
                  </Text>
                </View>
              ) : null}
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default CardItem;
