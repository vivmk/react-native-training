import React from 'react';
import {Image} from 'react-native';

import {appBottomStyles} from '../navigation/AppBottomStack';

const HomeIcon = () => {
  return (
    <Image
      style={appBottomStyles.iconSize}
      source={{uri: 'https://cdn-icons-png.flaticon.com/512/25/25694.png'}}
    />
  );
};

export default HomeIcon;
