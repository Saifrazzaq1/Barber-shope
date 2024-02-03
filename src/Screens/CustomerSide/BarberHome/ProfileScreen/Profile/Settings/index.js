import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import Header from 'src/Components/Header';
import styles from './style';
import Text from 'src/Components/Text';
import HeaderCard from 'src/Components/HeaderCard';
import InputField from 'src/Components/InputFields';
import DownIcon from 'react-native-vector-icons/dist/AntDesign';
// import Button from 'src/Components/Button';
import HeaderCard from 'src/Components/HeaderCard';
import Modal from 'react-native-modal';
import CloseIcon from 'react-native-vector-icons/dist/AntDesign';
import Button from 'src/Components/Button';
export default function BarberSetting({navigation}) {
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.main}>
      <Header headerText="Settings" navigation={navigation} />
      <View style={styles.profile}>
        <Image
          source={require('src/Assets/barberPic.png')}
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text
            fontSize={22}
            color="#0E0E0E"
            fontWeight="600"
            style={styles.nameText}>
            Qasim Khan
          </Text>
          <Text fontSize={14} color="#1C3078" style={styles.barberTalent}>
            Lahore, Punjab, Pakistan
          </Text>
        </View>
      </View>
      <View style={styles.cardsStyle}>
        <TouchableOpacity onPress={() => navigation.navigate('BaberProfile')}>
          <HeaderCard
            color="#1C3078"
            flexDirection="row"
            source={require('src/Assets/Edit.png')}
            text="Edit Profile"
            textColor="#F5F5F5"
            textFontSize={16}
            textAlign="left"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('BarberChangePassword')}>
          <HeaderCard
            color="#1C3078"
            flexDirection="row"
            source={require('src/Assets/Key.png')}
            text="Change Password"
            textColor="#F5F5F5"
            textFontSize={16}
            textAlign="left"
          />
        </TouchableOpacity>
        <HeaderCard
          color="#1C3078"
          flexDirection="row"
          source={require('src/Assets/Logout.png')}
          text="Logout"
          textColor="#F5F5F5"
          textFontSize={16}
          textAlign="left"
        />
        <HeaderCard
          color="#1C3078"
          flexDirection="row"
          source={require('src/Assets/TermsandConditions.png')}
          text="Terms & Conditions"
          textColor="#F5F5F5"
          textFontSize={16}
          textAlign="left"
        />
        <HeaderCard
          color="#1C3078"
          flexDirection="row"
          source={require('src/Assets/Info.png')}
          text="About us"
          textColor="#F5F5F5"
          textFontSize={16}
          textAlign="left"
        />
      </View>
    </View>
  );
}
