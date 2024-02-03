import {ScrollView, TouchableOpacity, View, Image} from 'react-native';
import React, {useState} from 'react';
import Text from 'src/Components/Text';
import styles from './style';
import Header from 'src/Components/Header';
import HeaderCard from 'src/Components/HeaderCard';
import Modal from 'react-native-modal';
import CloseIcon from 'react-native-vector-icons/dist/Ionicons';
import Button from 'src/Components/Button';
import {heightRef, widthRef} from 'src/config/screenSize';
import {LOGOUT} from 'src/Redux/Reducers/Auth/actions';
import {useSelector} from 'react-redux';
export default function Setting({navigation}) {
  const [isModalVisible, setModalVisible] = useState(false);
  const user = useSelector(s => s.auth.user);
  console.log(JSON.stringify(user, null, 2), 'User');
  return (
    <View style={styles.main}>
      <Header NoBackIcon messageIcon />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('BaberEditProfile');
        }}
        style={styles.profile}>
        <Image
          source={require('src/Assets/barberPic.png')}
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text
            fontSize={22}
            fontWeight="400"
            fontFamily="Montserrat-Bold"
            color="#0E0E0E"
            style={styles.nameText}>
            {user.fullName}
          </Text>
          <Text
            fontSize={14}
            fontFamily="Montserrat-Bold"
            color="#1C3078"
            style={styles.barberTalent}>
            {user.city} {user.address}
          </Text>
        </View>
      </TouchableOpacity>

      <Text
        fontSize={28}
        fontWeight="600"
        fontFamily="Montserrat-Bold"
        color="#1C3078"
        style={styles.set}>
        Settings
      </Text>
      <View style={styles.cardsStyle}>
        <TouchableOpacity onPress={() => navigation.navigate('BarberProfile')}>
          <HeaderCard
            color="#1C3078"
            flexDirection="row"
            source={require('src/Assets/Group.png')}
            iconColor="#FFF"
            text="Salon Profile"
            textColor="#F5F5F5"
            textFontSize={16}
            tintColor="#FFF"
            textAlign="left"
            showButton={true}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Accounts')}>
          <HeaderCard
            color="#F5F5F5"
            flexDirection="row"
            source={require('src/Assets/money.png')}
            text="Accounts"
            textColor="#1C3078"
            editColor={'#1C3078'}
            textFontSize={16}
            textAlign="left"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('FAQ')}>
          <HeaderCard
            color="#F5F5F5"
            flexDirection="row"
            source={require('src/Assets/terms.png')}
            text="FAQ's"
            textColor="#1C3078"
            textFontSize={16}
            textAlign="left"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AboutUs')}>
          <HeaderCard
            color="#F5F5F5"
            flexDirection="row"
            source={require('src/Assets/Info.png')}
            text="About us"
            textColor="#1C3078"
            textFontSize={16}
            textAlign="left"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('TermCondition')}>
          <HeaderCard
            color="#f5f5f5"
            flexDirection="row"
            source={require('src/Assets/screw.png')}
            text="Terms & Conditions"
            textColor="#1C3078"
            textFontSize={16}
            showButton={true}
            textAlign="left"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{paddingBottom: 100 * heightRef}}
          onPress={() => setModalVisible(true)}>
          <HeaderCard
            color="#F5F5F5"
            flexDirection="row"
            source={require('src/Assets/Logout.png')}
            text="Logout"
            textColor="#1C3078"
            textFontSize={16}
            textAlign="left"
          />
        </TouchableOpacity>
      </View>
      <View>
        <Modal
          transparent={true}
          style={{
            alignSelf: 'center',
            flex: 1,
          }}
          coverScreen={true}
          isVisible={isModalVisible}
          swipeDirection="Right">
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 320 * widthRef,
                height: 300 * heightRef,
                borderRadius: 20,
                backgroundColor: 'white',
                padding: 20,
              }}>
              <View style={{alignItems: 'center'}}>
                <CloseIcon name="alert-circle" size={60} color="#1C3078" />
              </View>

              <View style={{}}>
                <Text fontWeight="500" color="#0E0E0E" fontSize={24}>
                  Are you sure you want to Logout?
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  marginTop: 16,
                }}>
                <Button
                  title="Sure"
                  width={'100%'}
                  btnheight={60}
                  radius={20}
                  // onPress={() => setModalVisible(check => !check)}
                  onPress={LOGOUT}
                />
                <Button
                  title="Not sure"
                  width={'100%'}
                  btnheight={60}
                  radius={20}
                  btnmarginTop={0}
                  Color="white"
                  btnborderWidth={0}
                  onPress={() => setModalVisible(check => !check)}
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}
