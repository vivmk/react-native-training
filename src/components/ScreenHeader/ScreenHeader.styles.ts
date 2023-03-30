import {StyleSheet} from 'react-native';

import colors from '../../constants/colors';

const screenHeaderStyles = StyleSheet.create({
  headerTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.green,
  },
  iconSize: {
    height: 16,
    width: 16,
  },
  backIcon: {
    marginLeft: 10,
    marginRight: 30,
  },
  rootContainer: {
    padding: 15,
    flexDirection: 'row',
    backgroundColor: colors.white,
    alignItems: 'center',
  },
});

export default screenHeaderStyles;
