import {StyleSheet} from 'react-native';

import colors from '../../../../constants/colors';

const signOutSheetStyles = StyleSheet.create({
  headerContainer: {
    paddingVertical: 20,
    paddingHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#eee',
    borderBottomWidth: 2,
  },
  signOutText: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.red,
  },
  bodyContainer: {
    fontSize: 18,
    padding: 25,
    lineHeight: 25,
  },
  footerContainer: {
    marginTop: 270,
  },
  yesButtonContainer: {
    width: 80,
    height: 45,
    borderRadius: 12,
    marginRight: 30,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.green,
  },
  yesText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '700',
  },
});

export default signOutSheetStyles;
