import {StyleSheet} from 'react-native';

import colors from '../../../../constants/colors';

const signOutModalStyles = StyleSheet.create({
  buttonText: {
    fontWeight: '500',
    color: colors.white,
  },
  buttonContainer: {
    width: 80,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.green,
  },
  bodyText: {
    fontSize: 15,
    color: 'black',
    marginVertical: 30,
  },
  crossText: {
    color: colors.white,
    fontSize: 15,
  },
  crossIcon: {
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: colors.red,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 15,
    fontWeight: '600',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default signOutModalStyles;
