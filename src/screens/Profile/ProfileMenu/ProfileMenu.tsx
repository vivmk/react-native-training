import React, {useRef} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';

import localUrls from '../../../constants/global.urls';
import profileMenuStyles from './ProfileMenu.styles';
import localStrings from '../../../constants/global.strings';
import {crossText, menuData} from '../../../constants/global.constants';
import {MenuListType} from './ProfileMenu.type';
import {BottomSheet} from '../../../components';
import {ActionSheetRef} from 'react-native-actions-sheet';
import searchBarStyles from '../../Home/SearchBar/SearchBar.styles';
import colors from '../../../constants/colors';
import routes from '../../../constants/screen.routes';
import {storePinInLocal} from '../../../utils/storePinInLocal';
import {useNavigation} from '@react-navigation/native';

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
   * closeBottomSheet method
   * @returns {void}
   */
  const closeBottomSheet = (): void => bottomSheetRef.current?.hide();

  /**
   * onSignOutPressHandler method
   * @returns {void}
   */
  const onSignOutPressHandler = (): void => {
    storePinInLocal(null);
    closeBottomSheet();

    setTimeout(() => {
      navigation.navigate(routes.LandingScreen);
    }, 250);
  };

  /**
   * renderProfileMenu method
   * @param {MenuListType} menuListProps
   * @returns {JSX.Element}
   */
  const renderProfileMenu = (menuListProps: MenuListType): JSX.Element => {
    const {item: menu, index} = menuListProps;

    return (
      <TouchableOpacity key={index} style={profileMenuStyles.menuContainer}>
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
      <TouchableOpacity onPress={openBottomSheet}>
        <Text style={profileMenuStyles.signOut}>
          {localStrings.profileMenu.signOut}
        </Text>
      </TouchableOpacity>
      <BottomSheet sheetRef={bottomSheetRef}>
        <View>
          {/* header */}
          <View
            style={{
              paddingVertical: 20,
              paddingHorizontal: 25,
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderBottomColor: '#eee',
              borderBottomWidth: 2,
            }}>
            <Text style={{fontSize: 18, fontWeight: '700', color: colors.red}}>
              Sign Out
            </Text>
            <TouchableOpacity
              onPress={closeBottomSheet}
              style={searchBarStyles.crossContainer}>
              <Text style={searchBarStyles.crossText}>{crossText}</Text>
            </TouchableOpacity>
          </View>
          {/* modal body */}
          <Text style={{fontSize: 18, padding: 25, lineHeight: 25}}>
            Are you sure you want to sign out? Your existing PIN will not be
            valid after this.
          </Text>
          {/* footer */}
          <View style={{marginTop: 200}}>
            <TouchableOpacity
              style={{
                width: 80,
                height: 50,
                borderRadius: 12,
                marginRight: 30,
                alignSelf: 'flex-end',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: colors.green,
              }}
              onPress={onSignOutPressHandler}>
              <Text
                style={{color: colors.white, fontSize: 18, fontWeight: '700'}}>
                Yes
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>
    </>
  );
};

export default ProfileMenu;
