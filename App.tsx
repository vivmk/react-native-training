import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import React from 'react';

import LandingScreen from './src/LandingScreen';
import {store} from './src/app/store';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="green" />
      <LandingScreen />
    </Provider>
  );
};

export default App;
