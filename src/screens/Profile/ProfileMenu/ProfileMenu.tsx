import React, {useRef} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {ActionSheetRef} from 'react-native-actions-sheet';
import {useNavigation} from '@react-navigation/native';

import localUrls from '../../../constants/global.urls';
import profileMenuStyles from './ProfileMenu.styles';
import localStrings from '../../../constants/global.strings';
import {menuData} from '../../../constants/global.constants';
import {MenuListType} from './ProfileMenu.type';
import SignOutSheet from './SignOutSheet/SignOutSheet';

/**
 * component to show profile menu
 * @returns {JSX.Element}
 */
const ProfileMenu: React.FC = (): JSX.Element => {
  const navigation = useNavigation<any>();
  const bottomSheetRef = useRef<ActionSheetRef>(null);

  /**
   * openBottomSheet method
   * @returns {void}
   */
  const openBottomSheet = (): void => bottomSheetRef.current?.show();

  /**
   * renderProfileMenu method
   * @param {MenuListType} menuListProps
   * @returns {JSX.Element}
   */
  const renderProfileMenu = (menuListProps: MenuListType): JSX.Element => {
    const {item: menu, index} = menuListProps;

    return (
      <TouchableOpacity
        key={index}
        style={profileMenuStyles.menuContainer}
        onPress={() =>
          navigation.navigate(menu.stackName, {screen: menu.screenName})
        }>
        <Text style={profileMenuStyles.menuText}>{menu.menuName}</Text>
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
      <TouchableOpacity onPress={openBottomSheet}>
        <Text style={profileMenuStyles.signOut}>
          {localStrings.profileMenu.signOut}
        </Text>
      </TouchableOpacity>
      <SignOutSheet sheetRef={bottomSheetRef} />
    </>
  );
};

export default ProfileMenu;
