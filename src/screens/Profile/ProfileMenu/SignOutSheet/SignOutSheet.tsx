import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {BottomSheet} from '../../../../components';
import {crossText} from '../../../../constants/global.constants';
import searchBarStyles from '../../../Home/SearchBar/SearchBar.styles';
import {storePinInLocal} from '../../../../utils/storePinInLocal';
import localNumbers from '../../../../constants/global.numbers';
import routes from '../../../../constants/screen.routes';
import signOutSheetStyles from './SignOutSheet.styles';

const SignOutSheet = (props: any) => {
  const navigation = useNavigation<any>();
  const {sheetRef} = props;

  /**
   * closeBottomSheet method
   * @returns {void}
   */
  const closeBottomSheet = (): void => sheetRef.current?.hide();

  /**
   * onSignOutPressHandler method
   * @returns {void}
   */
  const onSignOutPressHandler = (): void => {
    storePinInLocal(null);
    closeBottomSheet();

    setTimeout(() => {
      navigation.navigate(routes.LandingScreen);
    }, localNumbers.profileMenu.navigateDelay);
  };

  return (
    <BottomSheet sheetRef={sheetRef}>
      <View>
        {/* header */}
        <View style={signOutSheetStyles.headerContainer}>
          <Text style={signOutSheetStyles.signOutText}>Sign Out</Text>
          <TouchableOpacity
            onPress={closeBottomSheet}
            style={searchBarStyles.crossContainer}>
            <Text style={searchBarStyles.crossText}>{crossText}</Text>
          </TouchableOpacity>
        </View>
        {/* modal body */}
        <Text style={signOutSheetStyles.bodyContainer}>
          Are you sure you want to sign out ? Your existing PIN will not be
          valid after this.
        </Text>
        {/* footer */}
        <View style={signOutSheetStyles.footerContainer}>
          <TouchableOpacity
            style={signOutSheetStyles.yesButtonContainer}
            onPress={onSignOutPressHandler}>
            <Text style={signOutSheetStyles.yesText}>Yes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BottomSheet>
  );
};

export default SignOutSheet;
