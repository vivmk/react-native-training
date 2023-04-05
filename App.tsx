import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import React from 'react';

import {store} from './src/redux/store';
import AppStack from './src/navigation/AppStack';
import colors from './src/constants/colors';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={colors.green} />
      <AppStack />
    </Provider>
  );
};

export default App;
