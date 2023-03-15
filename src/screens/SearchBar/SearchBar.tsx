import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const SearchBar = () => {
  return (
    <View style={searchBarStyles.rootContainer}>
      <TextInput
        style={searchBarStyles.searchText}
        placeholder="Search by title, body"
      />
    </View>
  );
};

export default SearchBar;

const searchBarStyles = StyleSheet.create({
  searchText: {
    fontWeight: '600',
    fontSize: 15,
  },
  rootContainer: {
    margin: 15,
    borderWidth: 2,
    borderColor: 'green',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingLeft: 8,
    elevation: 6,
  },
});
