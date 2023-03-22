import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Home, Profile} from '../screens';
import {StyleSheet} from 'react-native';
import {HomeIcon, ProfileIcon} from '../components';

const Tab = createBottomTabNavigator();

/**
 * tabScreenOptions method
 * @returns {object}
 */
const tabScreenOptions = (): object => ({
  tabBarActiveTintColor: 'green',
  tabBarLabelStyle: appBottomStyles.labelText,
  tabBarHideOnKeyboard: true,
});

/**
 * AppBottomStack component
 * @returns {JSX.Element}
 */
const AppBottomStack = (): JSX.Element => {
  return (
    <Tab.Navigator screenOptions={tabScreenOptions}>
      <Tab.Screen
        name="HomeScreen"
        options={{
          headerShown: false,
          tabBarIcon: HomeIcon,
          tabBarLabel: 'Home',
        }}
        component={Home}
      />
      <Tab.Screen
        name="ProfileScreen"
        options={{
          headerShown: false,
          tabBarIcon: ProfileIcon,
          tabBarLabel: 'Profile',
        }}
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export const appBottomStyles = StyleSheet.create({
  iconSize: {
    width: 16,
    height: 16,
  },
  labelText: {
    fontSize: 13,
    fontWeight: '600',
  },
});

export default AppBottomStack;
