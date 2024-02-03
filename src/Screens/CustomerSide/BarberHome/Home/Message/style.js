// style.js

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  add: {
    height: 30,
    width: 30,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#1C3078',
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
    maxWidth: '80%',
    color: 'black',
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
    maxWidth: '80%',
  },
  messageText: {
    fontSize: 16,
  },
  time: {
    fontSize: 12,
    marginTop: 5,
    marginBottom: -5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    backgroundColor: '#FFF',
    paddingVertical: 20,
    borderColor: '#D9D9D9',
    marginBottom: 20,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 20,
    borderRadius: 20,
    fontSize: 16,
    color: '#000000',
  },
  sendButton: {
    backgroundColor: '#1C3078',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 30,
  },
  sendButtonText: {},
});

export default styles;
