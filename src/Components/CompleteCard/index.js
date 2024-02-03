import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Text from '../Text';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

export default function CompleteCard({services, cardColor = '#47B45F', data}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Feedback');
      }}>
      <View style={styles.cardContainer}>
        <View
          style={[
            styles.card,
            {
              backgroundColor: cardColor,
              paddingVertical: 20,
            },
          ]}>
          <View style={styles.titleContainer}>
            <Text
              color="#FEFEFE"
              bold={'500'}
              fontSize={14}
              style={styles.titleText}>
              Appointment Complete
            </Text>
          </View>

          <View style={styles.centerTextContainer}>
            <Text color="#FEFEFE" fontSize={20} bold="500"></Text>
            <Text color="#FEFEFE" bold="bold" fontSize={16}>
              Click on card to give us review
            </Text>
          </View>

          <View style={styles.servicesContainer}>
            <Text color="#FEFEFE" fontSize={12}>
              Services:{' '}
            </Text>
            <Text bold={'600'} color="#d9ffe1" fontSize={12}>
              {services}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
