import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {LandingScreen, Friends, FriendDetail} from '../screens';
import AppBottomStack from './AppBottomTab';
import {ScreenHeader} from '../components';
import TodoTopTab from './TodoTopTab';

const Stack = createNativeStackNavigator();

const headerComponent = (
  navigation: any,
  title: string,
  isElevated: boolean = false,
) => (
  <ScreenHeader title={title} navigation={navigation} elevated={isElevated} />
);

/**
 * AppStack component
 * @returns {JSX.Element}
 */
const AppStack = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LandingScreen"
          options={{headerShown: false}}
          component={LandingScreen}
        />
        <Stack.Screen
          name="AppBottomStack"
          options={{headerShown: false}}
          component={AppBottomStack}
        />
        <Stack.Screen
          name="TodoTopTab"
          options={{
            header: ({navigation}) => headerComponent(navigation, 'Todo List'),
          }}
          component={TodoTopTab}
        />
        <Stack.Screen
          name="FriendsScreen"
          options={{
            header: ({navigation}) =>
              headerComponent(navigation, 'Friends', true),
          }}
          component={Friends}
        />
        <Stack.Screen
          name="FriendDetailScreen"
          options={{
            header: ({navigation}) =>
              headerComponent(navigation, 'Friend Detail', true),
          }}
          component={FriendDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
