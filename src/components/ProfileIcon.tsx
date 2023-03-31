import React from 'react';
import {Image} from 'react-native';
import localUrls from '../constants/global.urls';

import {appBottomStyles} from '../navigation/AppBottomTab';

/**
 * profile icon to show in bottom tab bar
 * @returns {JSX.Element}
 */
const ProfileIcon: React.FC = (): JSX.Element => {
  return (
    <Image
      style={appBottomStyles.iconSize}
      source={{uri: localUrls.profileIcon.iconImage}}
    />
  );
};

export default ProfileIcon;
