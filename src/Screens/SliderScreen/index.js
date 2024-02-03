import {View, ScrollView, Dimensions, Image} from 'react-native';
import React, {useRef, useState} from 'react';
import Text from 'src/Components/Text';
import RightIcon from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './style';
export default function SliderScreen({navigation}) {
  const {width, height} = Dimensions.get('window');
  const scrollRef = useRef(null);
  const [sliderState, setSliderState] = useState({currentPage: 0});
  const setSliderPage = event => {
    const {currentPage} = sliderState;
    const {x} = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor((x - 10) / width) + 1;
    console.log(indexOfNextScreen);
    setSliderState({...sliderState, currentPage: indexOfNextScreen});
  };
  const {currentPage} = sliderState;
  return (
    <View style={styles.flex}>
      <ScrollView
        ref={scrollRef}
        style={styles.flex}
        horizontal={true}
        scrollEventThrottle={16}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={event => {
          setSliderPage(event);
        }}>
        <View style={{width, height}}>
          <View style={styles.main}>
            <Image
              source={require('src/Assets/372561.png')}
              style={styles.image}
            />
          </View>
          <View style={styles.body}>
            <View style={styles.textview}>
              <Text color="#1C3078" fontSize={24} fontWeight="700">
                Easy to Access!
              </Text>
            </View>

            <Text
              color="#0E0E0E"
              fontSize={16}
              fontWeight="400"
              style={styles.text}>
              Now you can get all the details of your Barber in seconds!
            </Text>
          </View>
        </View>
        <View style={{width, height}}>
          <View style={styles.main}>
            <Image
              source={require('src/Assets/Awholeyear-rafiki1.png')}
              style={styles.main1}
            />
          </View>
          <View style={styles.body}>
            <View style={styles.textview}>
              <Text color="#1C3078" fontSize={24} fontWeight="700">
                Check Availibility
              </Text>
            </View>

            <Text
              color="#0E0E0E"
              fontSize={15}
              fontWeight="400"
              style={styles.text}>
              Check the availibility timings of Barber’s through your Smart
              Barber Shop App!
            </Text>
          </View>
        </View>

        <View style={{width, height}}>
          <View style={styles.main}>
            <Image
              source={require('src/Assets/38702771.png')}
              style={styles.imagef}
            />
          </View>
          <View style={styles.body}>
            <View style={styles.textview}>
              <Text color="#1C3078" fontSize={24} fontWeight="700">
                Book Appointment
              </Text>
            </View>
            <Text
              color="#0E0E0E"
              fontSize={16}
              fontWeight="400"
              style={styles.text}>
              Book your Seat in Barber Shop and safe your time!
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.dot}>
        {Array.from(Array(3).keys()).map((key, index) => (
          <View
            style={{
              height: 10,
              width: 10,
              borderRadius: 10 / 2,
              backgroundColor: '#1C3078',
              marginLeft: 10,
              opacity: currentPage === index ? 1 : 0.2,
            }}
            key={index}
          />
        ))}
      </View>
      <View style={styles.last}>
        <TouchableOpacity
          onPress={() =>
            currentPage === 2
              ? navigation.navigate('Login')
              : scrollRef.current.scrollTo({
                  x: width * (currentPage + 1),
                  y: 0,
                  animated: true,
                })
          }>
          <View style={styles.btnview}>
            <RightIcon
              name={currentPage === 2 ? 'check' : 'chevron-right'}
              color="white"
              size={35}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
