import {StyleSheet} from 'react-native';

import colors from '../../constants/colors';

const profileStyles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  iconSize: {
    width: 50,
    height: 50,
  },
  headerContainer: {
    flexDirection: 'row',
  },
  bioText: {
    width: 200,
    fontSize: 15,
    marginTop: 5,
    color: colors.green,
    fontWeight: '500',
  },
  nameText: {
    fontSize: 25,
    fontWeight: '700',
  },
  infoContainer: {
    paddingVertical: 40,
  },
  pictureContainer: {
    width: 100,
    height: 100,
    marginVertical: 30,
    marginHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: colors.green,
    backgroundColor: colors.white,
    elevation: 6,
  },
});

export default profileStyles;
