import React from 'react';
import {Image} from 'react-native';

import {appBottomStyles} from '../navigation/AppBottomStack';

const ProfileIcon = () => {
  return (
    <Image
      style={appBottomStyles.iconSize}
      source={{uri: 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png'}}
    />
  );
};

export default ProfileIcon;
