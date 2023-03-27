import {Modal, View} from 'react-native';
import React from 'react';

import popupModalStyles from './PopupModal.styles';
import {PopupModalProps} from './PopupModal.type';

const PopupModal: React.FC<PopupModalProps> = (props): JSX.Element => {
  const {isModalVisible, children} = props;

  return (
    <Modal
      transparent
      statusBarTranslucent
      visible={isModalVisible}
      animationType="fade">
      <View style={popupModalStyles.rootContainer}>
        <View style={popupModalStyles.modalContainer}>{children}</View>
      </View>
    </Modal>
  );
};

export default PopupModal;
