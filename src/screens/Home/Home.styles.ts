import {StyleSheet} from 'react-native';

import colors from '../../constants/colors';

const landingScreenStyles = StyleSheet.create({
  welcomeText: {
    fontSize: 24,
    paddingLeft: 16,
    color: colors.green,
    fontWeight: '700',
    paddingTop: 10,
  },
  textMessage: {
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 10,
  },
  rootContainer: {
    flex: 1,
    backgroundColor: '#eee',
    paddingVertical: 10,
  },
});

export default landingScreenStyles;
