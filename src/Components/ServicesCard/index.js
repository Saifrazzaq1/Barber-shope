import React, {useState} from 'react';
import {View, Image, FlatList, TouchableOpacity} from 'react-native';
import Text from '../Text';
import styles from './style';
import {heightRef, widthRef} from 'src/config/screenSize';

function ServiceCard({
  barberServies,
  flexDirection,
  width,
  height,
  color,
  navigation,
  horizontal,
  contentDirection,
  barberText,
  seeall = true,
  bookAppointment = false,
  setAmount,
  setClickAble = false,
  barber = false,
  onPressbtn,
  setBookAppoint,
}) {
  const [selectedServices, setSelectedServices] = useState([]);

  const toggleSelection = index => {
    const isSelected = selectedServices.includes(index);
    if (isSelected) {
      setSelectedServices(selectedServices.filter(item => item !== index));
    } else {
      setSelectedServices([...selectedServices, index]);
    }
  };

  return (
    <View style={{flex: 1}}>
      <View style={([styles.servicesView], {flexDirection: 'column'})}>
        {seeall ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              color="#1C3078"
              fontSize={18}
              fontWeight="600"
              fontFamily="Montserrat-Bold"
              style={styles.headerText}>
              Services
            </Text>
            <TouchableOpacity
              onPress={() =>
                barber
                  ? navigation.navigate('BarberHomeServices', {barberServies})
                  : navigation.navigate('BarberServices')
              }>
              <Text
                color="#0e0e0e"
                fontFamily="Montserrat-Bold"
                fontSize={16}
                style={[styles.headerText, {textDecorationLine: 'underline'}]}>
                See all
              </Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>

      <FlatList
        horizontal={horizontal}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexDirection: contentDirection,
          flexGrow: 0,
        }}
        data={barberServies}
        keyExtractor={(item, index) => index.toString()}
        renderItem={barberService => {
          const isSelected = selectedServices.includes(barberService.index);

          return (
            <TouchableOpacity
              disabled={setClickAble ? false : true}
              onPress={() => {
                toggleSelection(barberService.index);
                onPressbtn(barberService.index);
              }}>
              <View
                style={[
                  styles.card,
                  {
                    backgroundColor: isSelected ? '#1C3078' : color,
                    flexDirection: flexDirection,
                    width: width || width * widthRef,
                    height: height * heightRef,
                  },
                ]}>
                <View style={styles.hairCutServices}>
                  <View style={{flex: 1}}>
                    <Text
                      color={isSelected ? '#FEFEFE' : '#0E0E0E'}
                      fontSize={18}
                      style={styles.hairCutText}>
                      {barberService.item.Name}
                    </Text>
                    <Text
                      fontSize={10}
                      color={isSelected ? '#FEFEFE' : '#0E0E0E'}
                      style={horizontal == false ? styles.textContent : null}>
                      {barberService.item.About}
                    </Text>
                  </View>
                  <Image
                    source={require('src/Assets/HairCut.png')}
                    style={{
                      height: 70,
                      width: 70,
                      marginTop: 10,
                      borderRadius: 50,
                    }}
                  />
                </View>
                <View>
                  <Text
                    color={isSelected ? '#FEFEFE' : '#0E0E0E'}
                    fontWeight="600"
                    fontSize={16}
                    fontFamily="Montserrat-Bold"
                    style={styles.servicesRupees}>
                    {barberService.item.Rupees}
                    {isSelected ? setAmount(barberService.item.Rupees) : null}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text
                      color={isSelected ? '#FEFEFE' : '#0E0E0E'}
                      fontSize={14}
                      style={styles.servicesTime}>
                      Time:
                    </Text>
                    <Text
                      color={
                        isSelected
                          ? 'yellow'
                          : bookAppointment
                          ? 'red'
                          : '#1C3078'
                      }
                      fontWeight="500"
                      fontSize={14}
                      fontFamily="Montserrat-Bold"
                      style={styles.servicesTime}>
                      {barberService.item.Time}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

export default ServiceCard;
