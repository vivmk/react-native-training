import {Modal, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import signOutModalStyles from './SignOutModal.styles';

const SignOutModal: React.FC = (signOutProps: any): JSX.Element => {
  const {isModalVisible, closeModal} = signOutProps;

  return (
    <Modal transparent statusBarTranslucent visible={isModalVisible}>
      <View style={signOutModalStyles.rootContainer}>
        <View style={signOutModalStyles.modalContainer}>
          {/* header */}
          <View style={signOutModalStyles.headerContainer}>
            <Text style={signOutModalStyles.headerText}>SIGN OUT</Text>
            <TouchableOpacity
              onPress={closeModal}
              style={signOutModalStyles.crossIcon}>
              <Text style={signOutModalStyles.crossText}>X</Text>
            </TouchableOpacity>
          </View>
          {/* description */}
          <Text style={signOutModalStyles.bodyText}>
            Are you sure you want to Sign Out?
          </Text>
          <TouchableOpacity style={signOutModalStyles.buttonContainer}>
            <Text style={signOutModalStyles.buttonText}>Yes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default SignOutModal;
