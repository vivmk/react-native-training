import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import React from 'react';

import {store} from './src/redux/store';
import LandingScreen from './src/screens/LandingScreen';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="green" />
      <LandingScreen />
    </Provider>
  );
};

export default App;
