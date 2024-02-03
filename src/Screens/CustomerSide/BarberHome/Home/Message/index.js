import React, {useState} from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Text from 'src/Components/Text';
import ChatHeader from './ChatHeader';
import styles from './style';

export default function ChatScreen() {
  const [messages, setMessages] = useState([
    {id: '1', text: 'Hello!', sender: 'user'},
    {
      id: '2',
      text: 'Hi there,This Hussam here i am here',
      sender: 'other',
    },
  ]);
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;
  const [inputText, setInputText] = useState('');
  const renderItem = ({item}) => (
    <View
      style={[
        item.sender === 'user' ? styles.userMessage : styles.otherMessage,
        {marginHorizontal: 20},
      ]}>
      {item.sender != 'user' ? (
        <View
          style={{
            height: 35,
            borderRadius: 5,
            backgroundColor: '#EDEDED',
            justifyContent: 'flex-start',
            flexDirection: 'row',
            marginBottom: 5,
          }}>
          <View
            style={{
              borderTopStartRadius: 15,
              borderBottomLeftRadius: 15,
              height: 35,
              width: 4,
              alignSelf: 'center',
              backgroundColor: '#1C3078',
            }}
          />
          <View
            style={{
              padding: 3,
            }}>
            <Text
              style={{
                color: '#1C3078',
                fontSize: 8,
                fontWeight: 'bold',
              }}>
              You
            </Text>
            <Text
              style={{
                alignSelf: 'center',
                textAlign: 'center',
              }}>
              {item.text}
            </Text>
          </View>
        </View>
      ) : null}
      <Text
        style={[
          styles.messageText,
          {color: item.sender === 'user' ? '#FFFF' : '#000'},
        ]}>
        {item.text}
      </Text>
      <Text
        style={[
          styles.time,
          {color: item.sender === 'user' ? '#FFFF' : '#000'},
          {textAlign: item.sender === 'user' ? 'right' : 'left'},
        ]}>
        5:55 Read
      </Text>
    </View>
  );

  const sendMessage = () => {
    if (inputText.trim() !== '') {
      setMessages([
        ...messages,
        {id: messages.length + 1, text: inputText, sender: 'user'},
      ]);
      setInputText('');
    }
  };
  return (
    <View style={styles.main}>
      <ChatHeader />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'heiht'}
        style={{flex: 1}}>
        <FlatList
          data={messages}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
        <View style={styles.inputContainer}>
          <TouchableOpacity>
            <AntDesign name="plus" color="#A0a0a0" size={25} />
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="Type a message here..."
            value={inputText}
            placeholderTextColor={'#a0a0a0'}
            onChangeText={text => setInputText(text)}
          />
          <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
            <Icon name="send" color="#FFF" size={14} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
