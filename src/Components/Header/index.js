import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {heightRef} from 'src/config/screenSize';
import Text from '../Text';
import View from '../View';
import styles from './style';
const HeaderHeight = 150 * heightRef;
const Header = ({headerText, NoBackIcon, messageIcon, hideIcon = true}) => {
  const navigation = useNavigation();
  const inset = useSafeAreaInsets();
  return (
    <View
      style={[
        {
          backgroundColor: '#FFF',
          width: '100%',
          height: headerText ? HeaderHeight : 'auto',
          marginTop: -10,
        },
        {paddingTop: inset.top + 20},
      ]}>
      {hideIcon === true ? (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={styles.container}>
            {NoBackIcon === true ? (
              <View style={styles.headingIcon}>
                <Image
                  style={styles.imageIcon2}
                  source={require('src/Assets/Arrow.png')}
                />
                <Image
                  style={styles.image}
                  source={require('src/Assets/BarberShopLogo2.png')}
                />
              </View>
            ) : (
              <View style={styles.headingIcon}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Icon name="chevron-left" color="black" size={25} />
                </TouchableOpacity>
                <Image
                  style={styles.image}
                  source={require('src/Assets/BarberShopLogo2.png')}
                />
              </View>
            )}
            <Text
              fontSize={26}
              fontWeight="600"
              fontFamily="Montserrat-Bold"
              style={styles.headerText}>
              {headerText}
            </Text>
          </View>
          {messageIcon === true ? (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Message');
              }}
              style={styles.headingIcon2}>
              <Image
                style={styles.imageIcon2}
                source={require('src/Assets/message.png')}
              />
            </TouchableOpacity>
          ) : null}
        </View>
      ) : (
        <Text style={styles.headerText}>{headerText}</Text>
      )}
    </View>
  );
};

export default Header;
