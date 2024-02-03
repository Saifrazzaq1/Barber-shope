import React from 'react';
import {ScrollView, View} from 'react-native';
import Header from 'src/Components/Header';
import Text from 'src/Components/Text';
import styles from './style';

function FAQ({route}) {
  const starImage = require('src/Assets/star.png');

  return (
    <ScrollView style={styles.main} stickyHeaderIndices={[0]}>
      <Header headerText="FAQ's" />
      <View
        style={{
          backgroundColor: '#f5f5f5',
          padding: 20,
          borderRadius: 10,
          marginBottom: 15,
        }}>
        <View style={styles.barberTalent}>
          <Text fontSize={20} style={styles.nameText1}>
            Good Thing’s About Cutting
          </Text>
          <Text fontSize={14} style={styles.barberTalent1}>
            Answer:
          </Text>
          <Text fontSize={12} style={styles.barberTalent2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#f5f5f5',
          padding: 20,
          borderRadius: 10,
          marginBottom: 15,
        }}>
        <View style={styles.barberTalent}>
          <Text fontSize={20} style={styles.nameText1}>
            Good Thing’s About Cutting
          </Text>
          <Text fontSize={14} style={styles.barberTalent1}>
            Answer:
          </Text>
          <Text fontSize={12} style={styles.barberTalent2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#f5f5f5',
          padding: 20,
          borderRadius: 10,
          marginBottom: 15,
        }}>
        <View style={styles.barberTalent}>
          <Text fontSize={20} style={styles.nameText1}>
            Good Thing’s About Cutting
          </Text>
          <Text fontSize={14} style={styles.barberTalent1}>
            Answer:
          </Text>
          <Text fontSize={12} style={styles.barberTalent2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default FAQ;
