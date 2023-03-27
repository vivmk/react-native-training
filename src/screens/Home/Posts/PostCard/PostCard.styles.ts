import {StyleSheet} from 'react-native';

import colors from '../../../../constants/colors';

const postCardStyles = StyleSheet.create({
  postBody: {
    marginTop: 5,
    fontSize: 14,
  },
  titleText: {
    fontSize: 16,
    fontWeight: '700',
  },
  rootContainer: {
    borderWidth: 2,
    borderColor: colors.green,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 15,
    backgroundColor: colors.white,
    borderRadius: 10,
    elevation: 5,
  },
});

export default postCardStyles;
