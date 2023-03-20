import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {CrossIconPropsType} from './crossIcon.type';
import {crossText, emptyString} from '../../constants/global.constants';
import searchBarStyles from '../../screens/Home/SearchBar/SearchBar.styles';

/**
 * component to show cross icon
 * @returns {JSX.Element}
 */
const CrossIcon: React.FC<CrossIconPropsType> = (
  crossIconProps: CrossIconPropsType,
): JSX.Element => {
  const {searchText, setSearchText} = crossIconProps;

  if (!searchText.length) {
    return <></>;
  }

  return (
    <View>
      <TouchableOpacity
        onPress={() => setSearchText(emptyString)}
        style={searchBarStyles.crossContainer}>
        <Text style={searchBarStyles.crossText}>{crossText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CrossIcon;
