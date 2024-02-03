// style.js

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  iconContainer: {
    marginRight: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePicContainer: {
    position: 'relative',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 20,
  },
  onlineIndicator: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 13,
    height: 13,
    borderRadius: 6,
    backgroundColor: '#47B45F',
    borderWidth: 2,
    borderColor: '#FFF',
  },
  userInfoContainer: {
    marginLeft: 10,
  },
  userName: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
