import React from 'react';
import style from './style';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import {heightRef} from 'src/config/screenSize';
import {widthRef} from 'src/config/screenSize';
const Main = () => {
  return (
    <View style={style.main}>
      <View style={style.content}>
        <Swiper style={style.wrapper} showsButtons={true}>
          <View style={style.slide1}>
            <Image
              // source={require('../../Assests/372561.png')}
              source={require('src/Assets/372561.png')}
              style={style.image}
            />
          </View>
          <View style={style.slide2}>
            <Image
              // source={require('../../Assests/Awholeyear-rafiki1.png')}
              source={require('src/Assets/Awholeyear-rafiki1.png')}
              style={style.image}
            />
          </View>
          <View style={style.slide3}>
            <Image
              // source={require('../../Assests/38702771.png')}
              source={require('src/Assets/38702771.png')}
              style={style.image}
            />
          </View>
        </Swiper>
      </View>
      <View style={style.body}>
        <View style={style.header}>
          {/* <Image
            source={require('../../Assests/Easy-to-Access!.png')}
            style={style.headerImage}
          /> */}
          <Text style={style.text}>Easy to Access!</Text>
          <Text style={style.textContent}>
            Now you can get all the details of your Barber in a seconds!
          </Text>
        </View>
        <View style={style.icon}>
          <TouchableOpacity>
            <Icon name="rightcircle" color="#1C3078" size={70 * widthRef} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Main;
