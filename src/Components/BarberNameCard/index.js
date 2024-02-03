import React, {useState} from 'react';
import {View, FlatList, TouchableOpacity, Touchable, Image} from 'react-native';
import {Card} from 'react-native-shadow-cards';
import styles from './style';
import Text from '../Text';
import {heightRef, widthRef} from 'src/config/screenSize';
import {LayoutAnimate} from 'src/config/function';
import {ENV} from 'src/config/env';
export default function BarberNameCard({
  image,
  text,
  barbersData,
  color,
  flexDirection,
  showHeaderText,
  headerText,
  width = '100%',
  elevation,
  showCard = true,
  showSeeAll,
  setExpanded,
  showLess,
  show,
  dataForDisplay,
  source,
  navigation,
  bookBarber = false,
}) {
  const [barber, setBarber] = useState('');
  console.log('🚀 ~ file: index.js:27 ~ barber:', dataForDisplay);
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          flex: 1,
        }}>
        <Text
          color="#1C3078"
          fontSize={18}
          fontWeight="600"
          fontFamily="Montserrat-Bold"
          style={styles.headerText}>
          {headerText}
        </Text>
        {showSeeAll ? (
          <TouchableOpacity
            onPress={() => {
              setExpanded(check => !check);
              showLess(check => !check);
              LayoutAnimate();
            }}>
            <Text
              fontFamily="Montserrat-Bold"
              color="#0e0e0e"
              fontSize={16}
              style={styles.headerTextAll}>
              {show ? 'Less' : 'See all'}
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={dataForDisplay?.map(event => {
          return event;
        })}
        keyExtractor={(item, index) => index.toString()}
        renderItem={barberName => {
          const check = barber === barberName.index;
          return (
            <TouchableOpacity
              onPress={() =>
                bookBarber
                  ? setBarber(barberName.index)
                  : navigation.navigate('BarberProfile', {
                      Barbers: barbersData[barberName.index],
                    })
              }>
              <View
                style={[
                  styles.card,
                  {
                    backgroundColor: check ? '#1C3078' : color,
                    flexDirection: flexDirection,
                    width: width || width * widthRef,
                  },
                ]}>
                <Image source={source} style={styles.image} />
                <View style={styles.barberNameTextView}>
                  <Text
                    color={check ? '#FEFEFE' : '#1C3078'}
                    fontWeight="700"
                    fontSize={18}
                    style={styles.barberName}>
                    {barberName.item}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
