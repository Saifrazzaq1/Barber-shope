import React, {useState} from 'react';
import {Image, TouchableOpacity, ScrollView, View} from 'react-native';
import Header from 'src/Components/Header';
import Text from 'src/Components/Text';
import CheckBox from '@react-native-community/checkbox';
import {heightRef} from 'src/config/screenSize';
import styles from './style';
import HeaderCard from 'src/Components/HeaderCard';
import {LayoutAnimate} from 'src/config/function';

function Accounts({navigation}) {
  const starImage = require('src/Assets/star.png');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [add, setAdd] = useState(false);

  return (
    <ScrollView style={styles.main} stickyHeaderIndices={[0]}>
      <Header headerText="Account Details" />
      <TouchableOpacity
        onPress={() => {
          setToggleCheckBox(!toggleCheckBox);
        }}
        style={{
          backgroundColor: '#f5f5f5',
          padding: 20,
          borderRadius: 10,
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
          marginBottom: 20,
        }}>
        <Image
          source={require('src/Assets/ccard.png')}
          style={{
            height: 25 * heightRef,
            width: 32 * heightRef,
          }}
        />
        <View
          style={{
            marginLeft: 10,
            flex: 1,
          }}>
          <Text fontSize={14} style={styles.barberTalent}>
            MCB
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text fontSize={12} color="#1C3078" style={styles.barberTalent0}>
              4333 1443 5342 54
            </Text>
          </View>
        </View>
        <CheckBox
          style={{
            transform: [{scaleX: 0.9}, {scaleY: 0.9}],
          }}
          value={toggleCheckBox}
          onValueChange={setToggleCheckBox}
          onAnimationType="fill"
          offAnimationType="fill"
          boxType="circle"
          tintColor="#D1D1D6"
          tintColors={'#a0a0a0'}
          onTintColor="#1C3078"
          onCheckColor="#1C3078"
          onFillColor="#bac9ff"
          disabled={false}
        />
      </TouchableOpacity>
      <Text style={styles.TH}>Transaction History</Text>
      <View
        style={{
          backgroundColor: '#f5f5f5',
          padding: 20,
          borderRadius: 10,
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 20,
        }}>
        <Image
          source={require('src/Assets/ccard.png')}
          style={{
            height: 25 * heightRef,
            width: 32 * heightRef,
          }}
        />
        <View
          style={{
            marginLeft: 10,
            flex: 1,
          }}>
          <Text fontSize={10} style={styles.barberTalent1}>
            Cash
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text fontSize={14} color="#1C3078" style={styles.barberTalent2}>
              Rs. 3000
            </Text>
            <Text fontSize={12} color="#1C3078" style={styles.barberTalent4}>
              9 AUG 2021
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#f5f5f5',
          padding: 20,
          borderRadius: 10,
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 20,
        }}>
        <Image
          source={require('src/Assets/ccard.png')}
          style={{
            height: 25 * heightRef,
            width: 32 * heightRef,
          }}
        />
        <View
          style={{
            marginLeft: 10,
            flex: 1,
          }}>
          <Text fontSize={10} style={styles.barberTalent1}>
            Cash
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text fontSize={14} color="#1C3078" style={styles.barberTalent2}>
              Rs. 3000
            </Text>
            <Text fontSize={12} color="#1C3078" style={styles.barberTalent4}>
              9 AUG 2021
            </Text>
          </View>
        </View>
      </View>
      {add ? (
        <View style={styles.addbtn}>
          <TouchableOpacity
            onPress={() => navigation.navigate('AppointmentDate')}>
            <HeaderCard
              tintColor="#FFF"
              color="#1C3078"
              flexDirection="row"
              source={require('src/Assets/addTag.png')}
              text="Book Appointment"
              textColor="#FFF"
              textFontSize={16}
              textAlign="center"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Calender')}>
            <HeaderCard
              tintColor="#FFF"
              color="#1C3078"
              flexDirection="row"
              source={require('src/Assets/AddList.png')}
              text="Current Bookings"
              textColor="#FFF"
              textFontSize={16}
              textAlign="center"
            />
          </TouchableOpacity>
        </View>
      ) : null}
      <TouchableOpacity
        style={styles.add}
        onPress={() => {
          setAdd(!add);
          LayoutAnimate(500);
        }}>
        <Image
          style={[
            styles.addimg,
            {
              transform: [{rotate: add ? '45deg' : '0deg'}],
            },
          ]}
          source={require('src/Assets/add.png')}
        />
      </TouchableOpacity>
    </ScrollView>
  );
}

export default Accounts;
