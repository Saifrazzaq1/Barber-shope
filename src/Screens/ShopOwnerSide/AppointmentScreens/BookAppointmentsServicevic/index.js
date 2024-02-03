import {
  ScrollView,
  View,
  TouchableOpacity,
  FlatList,
  Modal,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './style';
import Header from 'src/Components/Header';
import InputField from 'src/Components/InputFields';
import Text from 'src/Components/Text';
import Button from 'src/Components/Button';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import RightIcon from 'react-native-vector-icons/FontAwesome';
import {ALL_SERVICES} from 'src/Redux/Reducers/Auth/actions';

export default function AppointmentServices({navigation, route}) {
  const date = route.params.date;
  console.log(date);
  const [amount, setAmount] = useState('RS 0');
  const [modalVisible, setModalVisible] = useState(false);
  const inset = useSafeAreaInsets();
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedService, setSelectedService] = useState([]);
  const [servicess, setServicess] = useState([]);
  const [services, setServices] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [selectedModalItemId, setSelectedModalItemId] = useState(null);
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    ALL_SERVICES(res => {
      if (res.success) {
        console.log(JSON.stringify(res, null, 2), 'sssssssssssss');
        setServicess(res.services);
      }
    });
  }, []);

  const toggleSelection = index => {
    const isSelected = selectedServices.includes(index);
    const id = servicess[index]?._id;
    console.log(id, 'first');
    if (isSelected) {
      setSelectedServices(selectedServices.filter(item => item !== index));
      setServices(prevServices =>
        prevServices.filter(service => service.service !== id),
      );
    } else {
      setSelectedServices([...selectedServices, index]);
      // // Add the corresponding service to the services array
      // setServices(prevServices => [...prevServices, {service: id}]);
    }
  };

  const handleServicePress = serviceIndex => {
    const selectedServiceData = servicess[serviceIndex].styles;
    const id = servicess[serviceIndex]?._id;
    setSelectedService(selectedServiceData);
    setSelectedServiceId(id);
    console.log('Service ID:', id);

    if (servicess[serviceIndex].styles.length === 0) {
      setServices(p => [...p, {service: servicess[serviceIndex]?._id}]);
    }
    //  else {
    //   setServices(p => [
    //     ...p,
    //     {
    //       service: servicess[serviceIndex]?._id,
    //       style: servicess[serviceIndex].styles[0]._id,
    //     },
    //   ]);
    // }

    setModalVisible(true);
  };

  const handlePress = (index, modalItemId) => {
    const isSelected = selectedItems[index];
    const updatedSelection = [...selectedItems];
    setUpdated(false);
    if (isSelected) {
      updatedSelection[index] = false;
      setServices(prevServices =>
        prevServices.filter(service => service.style !== modalItemId),
      );
    } else {
      updatedSelection.fill(false);
      updatedSelection[index] = true;
      setServices(prevServices => [
        ...prevServices,
        {service: selectedServiceId, style: modalItemId},
      ]);
    }

    setSelectedItems(updatedSelection);
  };

  const handleNext = () => {
    const data = {services, date};
    console.log(data);
    if (services.length === 0) {
      alert('Please select at least one service.');
      return;
    }

    navigation.navigate('AppointmentBarber', {data});
  };
  return (
    <View style={[styles.main, modalVisible && styles.modalVisible]}>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: inset.bottom + 80}}>
        <View style={styles.body}>
          <Text fontSize={25} fontWeight="600" fontFamily="Montserrat-Bold">
            Book Appointment
          </Text>
          <InputField hiddenField={true} Heading="Select" title="Serviecs" />
          <View style={styles.textview}>
            <Text
              color="#1C3078"
              fontSize={20}
              fontWeight="600"
              style={styles.totalBill}>
              Total Bill
            </Text>
            <Text
              color="black"
              fontSize={28}
              fontWeight="600"
              style={styles.amount}>
              {amount}
            </Text>
          </View>
          <FlatList
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={servicess}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => {
              const isSelected = selectedServices.includes(index);

              return (
                <TouchableOpacity
                  onPress={() => {
                    toggleSelection(index);
                    handleServicePress(index);
                  }}>
                  <View style={isSelected ? styles.card1 : styles.card}>
                    <View style={styles.hairCutServices}>
                      <View style={{flex: 1}}>
                        <Text
                          color={isSelected ? '#FEFEFE' : '#0E0E0E'}
                          fontSize={18}
                          style={styles.hairCutText}>
                          {item.name}
                        </Text>
                        <Text
                          fontSize={10}
                          color={isSelected ? '#FEFEFE' : '#0E0E0E'}
                          style={styles.textContent}>
                          {item.about}
                        </Text>
                      </View>
                      <Image
                        source={require('src/Assets/HairCut.png')}
                        style={{
                          height: 70,
                          width: 70,
                          marginTop: 10,
                          borderRadius: 50,
                        }}
                      />
                    </View>
                    <View>
                      <View style={{flexDirection: 'row'}}>
                        <Text
                          color={isSelected ? '#FEFEFE' : '#0E0E0E'}
                          fontWeight="600"
                          fontSize={16}
                          fontFamily="Montserrat-Bold"
                          style={styles.servicesRupees}>
                          Rs{' '}
                        </Text>
                        <Text
                          color={isSelected ? '#FEFEFE' : '#0E0E0E'}
                          fontWeight="600"
                          fontSize={16}
                          fontFamily="Montserrat-Bold"
                          style={styles.servicesRupees}>
                          {item.price}
                          {isSelected ? setAmount(item.price) : null}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <Text
                          color={isSelected ? '#FEFEFE' : '#0E0E0E'}
                          fontSize={14}
                          style={styles.servicesTime}>
                          Time:
                        </Text>
                        <Text
                          color={isSelected ? 'yellow' : 'red'}
                          fontWeight="500"
                          fontSize={14}
                          fontFamily="Montserrat-Bold"
                          style={styles.servicesTime}>
                          {item.timeConsuming}
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
          <Button
            title="Next"
            width="100%"
            radius={20}
            btnheight={70}
            onPress={() => handleNext()}
          />
        </View>
      </ScrollView>
      <Modal animationType="slide" visible={modalVisible} transparent={true}>
        <View style={styles.modal}>
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={styles.topbtn}
          />
          <Text
            fontSize={26}
            fontWeight="600"
            color="#1C3078"
            style={{marginBottom: 5, marginHorizontal: 20}}>
            Choose your Style
          </Text>
          <Text
            fontSize={14}
            fontWeight="400"
            color="#888888"
            style={{marginBottom: 20, marginHorizontal: 20}}>
            Lorem Ipsum arena lorem hena
          </Text>
          <View style={{width: '100%', flex: 1, marginHorizontal: 12}}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              numColumns={3}
              data={selectedService}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => {
                const isSelected = selectedItems[index];
                return (
                  <TouchableOpacity
                    style={styles.modalbtn}
                    onPress={() => handlePress(index, item._id)}>
                    <Image
                      source={require('../../../../Assets/img5.png')}
                      style={styles.modalimg}
                    />
                    {isSelected ? (
                      <View
                        style={{
                          width: 35,
                          height: 35,
                          backgroundColor: '#1C3078',
                          borderRadius: 40,
                          justifyContent: 'center',
                          alignItems: 'center',
                          position: 'absolute',
                          left: 40,
                          bottom: 90,
                        }}>
                        <RightIcon name={'check'} color="white" size={30} />
                      </View>
                    ) : null}
                    <Text fontSize={18} fontWeight="600" color="black">
                      RS {item.price}
                    </Text>
                    <Text
                      fontSize={14}
                      fontWeight="400"
                      color="black"
                      style={{marginTop: 5}}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <View style={{width: '90%', marginHorizontal: 20}}>
            <Button
              title="Next"
              width={'100%'}
              radius={20}
              btnheight={60}
              onPress={() => setModalVisible(false)}
            />
            <Button
              title="Skip"
              width={'100%'}
              radius={20}
              btnheight={60}
              Color="white"
              btnborderWidth={0}
              btnmarginTop={0}
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
