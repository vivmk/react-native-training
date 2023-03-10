import {StatusBar} from 'react-native';
import React from 'react';

import LandingScreen from './src/LandingScreen';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="green" />
      <LandingScreen message="Gokul" />
    </>
  );
};

export default App;
