// ChatHeader.js

import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import styles from './style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const ChatHeader = () => {
  const handleBackPress = () => {
    console.log('Back icon pressed');
  };

  const handleProfilePress = () => {
    console.log('Profile picture pressed');
  };
  const inset = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View
      style={[
        styles.headerContainer,
        {
          backgroundColor: '#fff',
          marginTop: -10,
        },
        {paddingTop: inset.top + 20},
      ]}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.iconContainer}>
        <Icon name="chevron-left" color="black" size={25} />
      </TouchableOpacity>
      <View style={styles.profileContainer}>
        <TouchableOpacity onPress={handleProfilePress}>
          <View style={styles.profilePicContainer}>
            <Image
              source={require('src/Assets/barberPic.png')}
              style={styles.profilePic}
            />
            {/* Green round online indicator */}
            <View style={styles.onlineIndicator} />
          </View>
        </TouchableOpacity>
        <View style={styles.userInfoContainer}>
          <Text style={styles.userName}>Hussam Bin Noor</Text>
          {/* You can add additional user information here */}
        </View>
      </View>
    </View>
  );
};

export default ChatHeader;
