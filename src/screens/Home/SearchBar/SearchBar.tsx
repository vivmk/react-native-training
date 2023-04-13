import {Image, Keyboard, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';

import searchBarStyles from './SearchBar.styles';
import {SearchBarPropsType} from './searchBar.type';
import localStrings from '../../../constants/global.strings';
import localUrls from '../../../constants/global.urls';
import {CrossIcon} from '../../../components/CrossIcon';

/**
 * component to show search bar
 * @returns {JSX.Element}
 */
const SearchBar: React.FC<SearchBarPropsType> = (
  searchBarProps: SearchBarPropsType,
): JSX.Element => {
  const {searchText, setSearchText} = searchBarProps;

  return (
    <View style={searchBarStyles.rootContainer}>
      <View style={searchBarStyles.searchContainer}>
        <TextInput
          value={searchText}
          onChangeText={setSearchText}
          style={searchBarStyles.searchText}
          placeholder={localStrings.searchBar.inputPlaceholder}
        />
        <CrossIcon searchText={searchText} setSearchText={setSearchText} />
      </View>
      <TouchableOpacity
        testID="searchBarIcon"
        onPress={() => Keyboard.dismiss()}
        style={searchBarStyles.imageContainer}>
        <Image
          style={searchBarStyles.iconSize}
          source={{uri: localUrls.searchBar.searchIcon}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
