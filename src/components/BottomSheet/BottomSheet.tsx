import React from 'react';
import {StyleSheet, View} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';

import colors from '../../constants/colors';

const BottomSheet = (props: any) => {
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

const bottomSheetStyles = StyleSheet.create({
  rootContainer: {
    height: 500,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    backgroundColor: colors.white,
  },
});
