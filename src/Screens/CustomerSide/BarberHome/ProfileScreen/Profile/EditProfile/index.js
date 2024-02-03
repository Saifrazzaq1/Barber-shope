import React, {useState} from 'react';
import {View, Image, ScrollView, Pressable} from 'react-native';
import Header from 'src/Components/Header';
import styles from './style';
import Text from 'src/Components/Text';
import HeaderCard from 'src/Components/HeaderCard';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {heightRef} from 'src/config/screenSize';
import {useSelector} from 'react-redux';
export default function BaberEditProfile({route, navigation}) {
  const [edit, setEdit] = useState(true);
  const profile = route.params?.edit;
  const user = useSelector(s => s.auth.user);
  const formatDate = timestampString => {
    const timestamp = new Date(timestampString);
    const year = timestamp.getFullYear();
    const month = timestamp.getMonth() + 1;
    const day = timestamp.getDate();

    return `${year}-${month < 10 ? '0' + month : month}-${
      day < 10 ? '0' + day : day
    }`;
  };
  return (
    <ScrollView style={styles.main} stickyHeaderIndices={[0]}>
      <Header headerText="Profile" navigation={navigation} />
      <View style={styles.profile}>
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
      </View>
      <View style={styles.cardsStyle}>
        <Pressable
          onPress={() => {
            if (edit != true) navigation.navigate('BarberChangeNumber');
          }}>
          <HeaderCard
            color="#F5F5F5"
            flexDirection="row"
            source={require('src/Assets/iPhoneX.png')}
            text={user.phoneNumber}
            textColor="#1C3078"
            textFontSize={16}
            textAlign="left"
            editSource={require('src/Assets/editIcon.png')}
            showEditIcon={edit != true ? true : false}
          />
        </Pressable>
        <HeaderCard
          color="#F5F5F5"
          flexDirection="row"
          source={require('src/Assets/Age.png')}
          text={formatDate(user.dateOfBirth)}
          textColor="#1C3078"
          textFontSize={16}
          textAlign="left"
        />
        <Pressable
          onPress={() => {
            if (edit != true) navigation.navigate('ChangeAddress');
          }}>
          <HeaderCard
            color="#F5F5F5"
            flexDirection="row"
            source={require('src/Assets/HomeAddress.png')}
            text={user.city + ',' + user.address}
            textColor="#1C3078"
            textFontSize={16}
            textAlign="left"
            editSource={require('src/Assets/editIcon.png')}
            showEditIcon={edit != true ? true : false}
          />
        </Pressable>
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
          textContainer={user.about}
        />
        {edit != true ? (
          <TouchableOpacity
            style={{
              paddingBottom: 130 * heightRef,
              marginTop: 10 * heightRef,
            }}
            onPress={() => {
              setEdit(true);
            }}>
            <HeaderCard
              color="#1C3078"
              flexDirection="row"
              source={require('src/Assets/SaveClose.png')}
              text="Save"
              textColor="#F5F5F5"
              textFontSize={16}
              textAlign="left"
              showButton={true}
            />
          </TouchableOpacity>
        ) : (
          <>
            <TouchableOpacity
              style={{
                marginTop: 10 * heightRef,
              }}
              onPress={() => {
                setEdit(false);
              }}>
              <HeaderCard
                color="#1C3078"
                flexDirection="row"
                source={require('src/Assets/Edit.png')}
                text="Edit Profile"
                textColor="#F5F5F5"
                textFontSize={16}
                tintColor="#FFF"
                textAlign="left"
                showButton={true}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (profile == 'ppp') {
                  navigation.goBack();
                } else {
                  navigation.navigate('BarberChangePassword');
                }
              }}>
              <HeaderCard
                color="#1C3078"
                flexDirection="row"
                source={require('src/Assets/Key.png')}
                text="Change Password"
                textColor="#F5F5F5"
                textFontSize={16}
                tintColor="#FFF"
                textAlign="left"
                showButton={true}
              />
            </TouchableOpacity>
          </>
        )}
      </View>
    </ScrollView>
  );
}
