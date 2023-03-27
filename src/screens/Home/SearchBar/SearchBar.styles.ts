import {StyleSheet} from 'react-native';

import colors from '../../../constants/colors';
import {DEVICE_WIDTH} from '../../../constants/global.constants';

const searchBarStyles = StyleSheet.create({
  iconSize: {
    width: 25,
    height: 25,
  },
  crossText: {
    color: colors.white,
  },
  crossContainer: {
    height: 20,
    width: 20,
    borderRadius: 50,
    backgroundColor: colors.red,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    padding: 12,
    elevation: 6,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: colors.green,
    backgroundColor: colors.white,
  },
  rootContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchText: {
    fontWeight: '600',
    width: DEVICE_WIDTH - 150,
    fontSize: 15,
  },
  searchContainer: {
    margin: 15,
    borderWidth: 2,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: DEVICE_WIDTH - 100,
    borderColor: colors.green,
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingHorizontal: 10,
    elevation: 6,
  },
});

export default searchBarStyles;
