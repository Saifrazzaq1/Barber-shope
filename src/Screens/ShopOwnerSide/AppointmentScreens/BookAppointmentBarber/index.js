import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from 'src/Components/Button';
import Header from 'src/Components/Header';
import InputField from 'src/Components/InputFields';
import styles from './style';
import {BARBERS} from 'src/Redux/Reducers/Auth/actions';
import Text from 'src/Components/Text';

export default function AppointmentBarber({navigation, route}) {
  const data = route.params.data;
  console.log(data);
  const [selectedBarber, setSelectedBarber] = useState(null);
  const [barbers, setBarbers] = useState([]);
  useEffect(() => {
    BARBERS(res => {
      if (res.success) {
        console.log(JSON.stringify(res, null, 2), 'Barberssssssssssssss');
        setBarbers(res.barbers);
      }
    });
  }, []);
  const barberId = selectedBarber?._id;
  const ndata = {data, barberId};
  console.log(ndata);
  return (
    <View style={styles.main}>
      <View style={styles.body}>
        <Header navigation={navigation} headerText="Book Appointment" />
        <InputField hiddenField={true} Heading="Select" title="Barber" />
        <View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={barbers}
            keyExtractor={item => item._id}
            renderItem={({item}) => {
              const isSelected =
                selectedBarber && selectedBarber._id === item._id;
              return (
                <TouchableOpacity onPress={() => setSelectedBarber(item)}>
                  <View style={isSelected ? styles.card1 : styles.card}>
                    <Image
                      source={require('src/Assets/Ellipse6.png')}
                      style={styles.image}
                    />
                    <Text
                      fontWeight="700"
                      fontSize={18}
                      style={isSelected ? styles.text : styles.text1}>
                      {item.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View style={{marginTop: 29}}>
          <Button
            title="Next"
            width="100%"
            radius={20}
            btnheight={70}
            onPress={() => {
              navigation.navigate('AppointmentTime', {ndata});
            }}
          />
        </View>
      </View>
    </View>
  );
}
