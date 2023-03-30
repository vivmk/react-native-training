import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Profile, TodoList} from '../screens';
import {ScreenHeader} from '../components';

const Stack = createNativeStackNavigator();

/**
 * ProfileStack component
 * @returns {JSX.Element}
 */
const ProfileStack = (): JSX.Element => {
  /**
   * profileScreenOptions method
   * @returns {any}
   */
  const profileScreenOptions = (): any => ({headerShown: false});

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileScreen"
        options={profileScreenOptions}
        component={Profile}
      />
      <Stack.Screen
        name="TodoScreen"
        options={{
          header: ({navigation}) => (
            <ScreenHeader title="Todo List" navigation={navigation} />
          ),
        }}
        component={TodoList}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
