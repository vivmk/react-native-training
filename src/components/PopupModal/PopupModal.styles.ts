import {StyleSheet} from 'react-native';

import colors from '../../constants/colors';

const popupModalStyles = StyleSheet.create({
  modalContainer: {
    height: 200,
    width: 300,
    padding: 20,
    backgroundColor: colors.white,
    borderRadius: 10,
    elevation: 6,
  },
  rootContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default popupModalStyles;
