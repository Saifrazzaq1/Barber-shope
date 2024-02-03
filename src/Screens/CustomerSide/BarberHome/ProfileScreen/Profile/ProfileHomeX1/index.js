import React from 'react';
import {View, Image, ScrollView} from 'react-native';
import Header from 'src/Components/Header';
import styles from './style';
import Text from 'src/Components/Text';
import HeaderCard from 'src/Components/HeaderCard';
import {TouchableOpacity} from 'react-native-gesture-handler';
export default function BarberProfile({navigation}) {
  return (
    <ScrollView
      style={styles.main}
      stickyHeaderIndices={[0]}
      showsVerticalScrollIndicator={false}>
      <Header headerText="Profile" navigation={navigation} messageIcon />
      <View style={styles.profile}>
        <Image
          source={require('src/Assets/barberPic.png')}
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text
            fontSize={22}
            bold="bold"
            color="#0E0E0E"
            style={styles.nameText}>
            Qasim Khan
          </Text>
          <Text fontSize={14} color="#1C3078" style={styles.barberTalent}>
            Lahore, Punjab, Pakistan
          </Text>
        </View>
      </View>
      <View style={styles.cardsStyle}>
        <HeaderCard
          color="#F5F5F5"
          flexDirection="row"
          source={require('src/Assets/iPhoneX.png')}
          text="+92 315 0302382"
          textColor="#1C3078"
          editColor={'#1C3078'}
          textFontSize={16}
          textAlign="left"
          edit
        />
        <HeaderCard
          color="#F5F5F5"
          flexDirection="row"
          source={require('src/Assets/Age.png')}
          text="11 sep 2002"
          textColor="#1C3078"
          textFontSize={16}
          textAlign="left"
        />
        <HeaderCard
          color="#F5F5F5"
          flexDirection="row"
          source={require('src/Assets/HomeAddress.png')}
          text="Lahore,Pakistan"
          textColor="#1C3078"
          editColor={'#1C3078'}
          textFontSize={16}
          edit
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
          editColor={'#1C3078'}
          edit
          textContainer="Not ALorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        />
        <TouchableOpacity>
          <HeaderCard
            color="#1C3078"
            flexDirection="row"
            iconColor="#FFF"
            source={require('src/Assets/Edit.png')}
            text="Edit Profile"
            textColor="#F5F5F5"
            textFontSize={16}
            textAlign="left"
            showButton={true}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{paddingBottom: 100}}
          onPress={() => navigation.navigate('BarberSetting')}>
          <HeaderCard
            color="#1C3078"
            flexDirection="row"
            source={require('src/Assets/Key.png')}
            iconColor="#FFF"
            text="Change Password"
            textColor="#F5F5F5"
            textFontSize={16}
            textAlign="left"
            showButton={true}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
