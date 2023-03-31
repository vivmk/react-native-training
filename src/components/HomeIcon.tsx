import React from 'react';
import {Image} from 'react-native';

import localUrls from '../constants/global.urls';
import {appBottomStyles} from '../navigation/AppBottomTab';

/**
 * home icon to show in bottom tab bar
 * @returns {JSX.Element}
 */
const HomeIcon: React.FC = (): JSX.Element => {
  return (
    <Image
      style={appBottomStyles.iconSize}
      source={{uri: localUrls.homeIcon.iconImage}}
    />
  );
};

export default HomeIcon;
