import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import {Rating} from 'react-native-ratings';
import Header from 'src/Components/Header';
import HeaderCard from 'src/Components/HeaderCard';
import Text from 'src/Components/Text';
import {heightRef} from 'src/config/screenSize';
import styles from './style';
import Button from 'src/Components/Button';

const Feedback = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <Header headerText={'Feedback and Rating'} />
      <Text style={styles.text1}>Give</Text>
      <Text style={styles.text2}>Rating</Text>
      <View style={styles.ratingView}>
        <Rating
          imageSize={28}
          onFinishRating={this.ratingCompleted}
          ratingCount={5}
        />
      </View>
      <View style={styles.feedbackV}>
        <Text style={styles.text1}>Add</Text>
        <Text style={styles.text2}>Feedback</Text>
      </View>
      <View style={styles.inputFieldView}>
        <TextInput
          textAlignVertical={'top'}
          multiline={true}
          style={{
            color: 'black',
            fontSize: 24,
            height: 150 * heightRef,
            marginLeft: 10,
            flex: 1,
            paddingBottom: 5,
          }}
          placeholder={'Write Something good...'}
          placeholderTextColor="#C0C0C0"
          keyboardType={'default'}
          maxLength={200}
        />
      </View>
      <View style={styles.checkbox}>
        <CheckBox
          style={{
            transform: [{scaleX: 0.9}, {scaleY: 0.9}],
          }}
          onAnimationType="fill"
          offAnimationType="fill"
          boxType="square"
          tintColor="#D1D1D6"
          onTintColor="#1C3078"
          onCheckColor="#1C3078"
          onFillColor="#bac9ff"
          disabled={false}
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
        />
        <Text style={styles.text3}>Hide my Profile</Text>
      </View>
      <TouchableOpacity
        style={{
          position: 'absolute',
          alignSelf: 'center',
          bottom: 30,
          width: '95%',
        }}>
        <Button
          onPress={() => {
            navigation.goBack();
          }}
          title={'Done'}
          width={'100%'}
          btnheight={70}
          radius={20}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Feedback;
