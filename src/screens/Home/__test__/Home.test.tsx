import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {render} from '@testing-library/react-native';

import Home from '../Home';
import MockProvider from '../../../../__mocks__/MockProvider';

describe('Testing Home component', () => {
  const component = render(
    <MockProvider>
      <NavigationContainer>
        <Home />
      </NavigationContainer>
      ,
    </MockProvider>,
  );
  () => expect(component.findByTestId('Home')).toBeInTheDocument();
});
