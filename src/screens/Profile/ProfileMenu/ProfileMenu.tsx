import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';

import localUrls from '../../../constants/global.urls';
import profileMenuStyles from './ProfileMenu.styles';
import localStrings from '../../../constants/global.strings';
import {menuData} from '../../../constants/global.constants';
import {MenuListType} from './ProfileMenu.type';

/**
 * component to show profile menu
 * @returns {JSX.Element}
 */
const ProfileMenu: React.FC = (): JSX.Element => {
  /**
   * renderProfileMenu method
   * @param {MenuListType} menuListProps
   * @returns {JSX.Element}
   */
  const renderProfileMenu = (menuListProps: MenuListType): JSX.Element => {
    const {item: menu, index} = menuListProps;

    return (
      <TouchableOpacity
        onPress={() => {
          console.log('pressed item: ', menu.id);
        }}
        key={index}
        style={profileMenuStyles.menuContainer}>
        <Text style={profileMenuStyles.menuText}>{menu.name}</Text>
        <Image
          style={profileMenuStyles.iconSize}
          source={{uri: localUrls.profileMenu.arrowIcon}}
        />
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View style={profileMenuStyles.listContainer}>
        <FlatList data={menuData} renderItem={renderProfileMenu} />
      </View>
      <TouchableOpacity onPress={() => console.log('pressed sign out')}>
        <Text style={profileMenuStyles.signOut}>
          {localStrings.profileMenu.signOut}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default ProfileMenu;
