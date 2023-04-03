import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import localUrls from '../../constants/global.urls';
import screenHeaderStyles from './ScreenHeader.styles';

/**
 * ScreenHeader component
 * @returns {JSX.Element}
 */
const ScreenHeader = ({
  title,
  navigation,
  elevated = false,
}: any): JSX.Element => {
  return (
    <View
      style={{
        ...screenHeaderStyles.rootContainer,
        elevation: elevated ? 6 : 0,
      }}>
      <TouchableOpacity
        style={screenHeaderStyles.backIcon}
        onPress={() => navigation.goBack()}>
        <Image
          style={screenHeaderStyles.iconSize}
          source={{uri: localUrls.screenHeader.backIcon}}
        />
      </TouchableOpacity>
      <Text style={screenHeaderStyles.headerTitle}>{title}</Text>
    </View>
  );
};

export default ScreenHeader;
