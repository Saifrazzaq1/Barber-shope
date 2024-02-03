import {View, Image} from 'react-native';
import React, {useEffect} from 'react';
import Text from 'src/Components/Text';
import styles from './style';
export default function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => navigation.navigate('SliderScreen'), 2000);
  });
  return (
    <View style={styles.main}>
      <View style={styles.image}>
        <Image
          source={require('src/Assets/BarberShopLogo.png')}
          style={{width: '100%', height: '100%', resizeMode: 'contain'}}
        />
      </View>
    </View>
  );
}
