import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Home, Profile} from '../screens';
import {StyleSheet} from 'react-native';
import {HomeIcon, ProfileIcon} from '../components';

const Tab = createBottomTabNavigator();

const tabScreenOptions = () => ({
  tabBarActiveTintColor: 'green',
  tabBarLabelStyle: appBottomStyles.labelText,
  tabBarHideOnKeyboard: true,
});

const AppBottomStack = () => {
  return (
    <Tab.Navigator screenOptions={tabScreenOptions}>
      <Tab.Screen
        name="Home"
        options={{headerShown: false, tabBarIcon: HomeIcon}}
        component={Home}
      />
      <Tab.Screen
        name="Profile"
        options={{headerShown: false, tabBarIcon: ProfileIcon}}
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
