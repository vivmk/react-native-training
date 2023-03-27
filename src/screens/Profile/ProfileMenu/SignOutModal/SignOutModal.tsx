import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import signOutModalStyles from './SignOutModal.styles';
import {SignOutProps} from './SignOutModal.type';
import localStrings from '../../../../constants/global.strings';
import routes from '../../../../constants/screen.routes';
import {useNavigation} from '@react-navigation/native';
import {storePinInLocal} from '../../../../utils/storePinInLocal';
import {PopupModal} from '../../../../components';

/**
 * SignOutModal component
 * @param {SignOutProps} signOutProps
 * @returns {JSX.Element}
 */
const SignOutModal: React.FC<SignOutProps> = (signOutProps): JSX.Element => {
  const navigation = useNavigation<any>();
  const {isModalVisible, closeModal} = signOutProps;

  /**
   * onSignOutPressHandler method
   * @returns {void}
   */
  const onSignOutPressHandler = (): void => {
    closeModal();
    navigation.navigate(routes.LandingScreen);
    storePinInLocal(null);
  };

  return (
    <PopupModal isModalVisible={isModalVisible}>
      <>
        {/* header */}
        <View style={signOutModalStyles.headerContainer}>
          <Text style={signOutModalStyles.headerText}>
            {localStrings.signOutModal.signOut}
          </Text>
          <TouchableOpacity
            onPress={closeModal}
            style={signOutModalStyles.crossIcon}>
            <Text style={signOutModalStyles.crossText}>
              {localStrings.signOutModal.crossText}
            </Text>
          </TouchableOpacity>
        </View>
        {/* description */}
        <Text style={signOutModalStyles.bodyText}>
          {localStrings.signOutModal.signOutMessage}
        </Text>
        <TouchableOpacity
          onPress={onSignOutPressHandler}
          style={signOutModalStyles.buttonContainer}>
          <Text style={signOutModalStyles.buttonText}>
            {localStrings.signOutModal.yes}
          </Text>
        </TouchableOpacity>
      </>
    </PopupModal>
  );
};

export default SignOutModal;
