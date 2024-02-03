import {NavigationContainer} from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import React from 'react';
import {LogBox, Platform, StatusBar, UIManager} from 'react-native';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from 'src/Redux/ConfigureStore';
import Navigation from 'src/Navigations';
import Snackbar from 'src/Components/Snackbar';

LogBox.ignoreAllLogs();
if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar
          backgroundColor={'#FFF'}
          barStyle="dark-content"
          translucent
        />

        <Navigation />
        <Snackbar />
      </PersistGate>
    </Provider>
  );
};

export default App;
