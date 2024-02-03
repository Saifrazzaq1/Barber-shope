import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {useAppSelector} from 'src/Helper/Hooks/reduxHooks';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';

const Navigation = () => {
  const user = useAppSelector(s => s?.auth?.user);
  return (
    <NavigationContainer
      onReady={() => {
        RNBootSplash.hide({fade: true});
      }}>
      {/* <AuthStack  /> */}
      {user == null ? (
        <AuthStack />
      ) : user?.role === 'user' ? (
        <HomeStack />
      ) : null}
    </NavigationContainer>
  );
};

export default Navigation;
