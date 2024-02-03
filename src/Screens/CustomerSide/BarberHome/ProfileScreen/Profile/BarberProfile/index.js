import React from 'react';
import {View, Image, ScrollView} from 'react-native';
import Header from 'src/Components/Header';
import styles from './style';
import Text from 'src/Components/Text';
import HeaderCard from 'src/Components/HeaderCard';
import {heightRef} from 'src/config/screenSize';
import {Rating, AirbnbRating} from 'react-native-ratings';

function BarberProfile({route}) {
  const starImage = require('src/Assets/star.png');

  return (
    <ScrollView style={styles.main} stickyHeaderIndices={[0]}>
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
            {/* {route.params.Name} */}Qasim
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
          // text={route.params.Name}
          text={'+9234 93027749'}
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
          textContainer="Not ALorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        />
      </View>
      <Text
        fontSize={20}
        fontWeight="600"
        fontFamily="Montserrat-Bold"
        style={styles.nameText1}>
        Review and Rating
      </Text>
      <View style={{backgroundColor: '#f5f5f5', padding: 20, borderRadius: 10}}>
        <View style={styles.barberTalent}>
          <View style={{flexDirection: 'row'}}>
            <Text fontSize={14} style={styles.barberTalent1}>
              3.9
            </Text>
            <Rating
              tintColor="#f5f5f5"
              ratingCount={5}
              imageSize={18}
              onFinishRating={this.ratingCompleted}
              style={{paddingLeft: 5, paddingBottom: 3}}
            />
          </View>
          <Text fontSize={12} style={styles.barberTalent1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <Text
              fontSize={14}
              color="#1C3078"
              fontWeight="600"
              fontFamily="Montserrat-Bold"
              style={styles.barberTalent2}>
              Hussam
            </Text>
            <Image
              source={require('src/Assets/Ellipse6.png')}
              style={{
                height: 30 * heightRef,
                marginLeft: 5,
                width: 30 * heightRef,
              }}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#f5f5f5',
          padding: 20,
          borderRadius: 10,
          marginTop: 15,
          marginBottom: 130,
        }}>
        <View style={styles.barberTalent}>
          <View style={{flexDirection: 'row'}}>
            <Text fontSize={14} style={styles.barberTalent1}>
              3.9
            </Text>
            <Rating
              ratingImage={starImage}
              tintColor="#f5f5f5"
              ratingColor="red"
              ratingCount={5}
              imageSize={18}
              onFinishRating={this.ratingCompleted}
              style={{
                paddingLeft: 5,
                paddingBottom: 3,
              }}
            />
          </View>
          <Text fontSize={12} style={styles.barberTalent1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <Text
              fontSize={14}
              color="#1C3078"
              fontWeight="600"
              fontFamily="Montserrat-Bold"
              style={styles.barberTalent2}>
              Hussam
            </Text>
            <Image
              source={require('src/Assets/Ellipse6.png')}
              style={{
                height: 30 * heightRef,
                marginLeft: 5,
                width: 30 * heightRef,
              }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default BarberProfile;
