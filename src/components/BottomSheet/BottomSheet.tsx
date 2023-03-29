import React from 'react';
import {View} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';

import bottomSheetStyles from './BottomSheet.styles';
import {BottomSheetProps} from './BottomSheet.type';

/**
 * BottomSheet component
 * @param {BottomSheetProps} props
 * @returns {JSX.Element}
 */
const BottomSheet: React.FC<BottomSheetProps> = (props): JSX.Element => {
  const {sheetRef, children} = props;

  return (
    <ActionSheet
      ref={sheetRef}
      containerStyle={bottomSheetStyles.rootContainer}>
      <View>{children}</View>
    </ActionSheet>
  );
};

export default BottomSheet;
