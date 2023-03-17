import {
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import {DEVICE_WIDTH} from '../../../constants/global.constants';

interface SearchBarProps {
  searchText: string;
  setSearchText: (text: string) => void;
}

const SearchBar = (props: SearchBarProps) => {
  const {searchText, setSearchText} = props;

  return (
    <View style={searchBarStyles.rootContainer}>
      <View style={searchBarStyles.searchContainer}>
        <TextInput
          value={searchText}
          onChangeText={setSearchText}
          style={searchBarStyles.searchText}
          placeholder="Search by title"
        />
        {searchText.length > 0 && (
          <TouchableOpacity
            onPress={() => setSearchText('')}
            style={searchBarStyles.crossContainer}>
            <Text style={searchBarStyles.crossText}>X</Text>
          </TouchableOpacity>
        )}
      </View>
      <TouchableOpacity
        onPress={() => Keyboard.dismiss()}
        style={searchBarStyles.imageContainer}>
        <Image
          style={{width: 25, height: 25}}
          source={{uri: 'https://cdn-icons-png.flaticon.com/512/54/54481.png'}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const searchBarStyles = StyleSheet.create({
  crossText: {
    color: 'white',
  },
  crossContainer: {
    height: 20,
    width: 20,
    borderRadius: 50,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    padding: 12,
    elevation: 6,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: 'green',
    backgroundColor: 'white',
  },
  rootContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchText: {
    fontWeight: '600',
    width: DEVICE_WIDTH - 150,
    fontSize: 15,
  },
  searchContainer: {
    margin: 15,
    borderWidth: 2,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: DEVICE_WIDTH - 100,
    borderColor: 'green',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 10,
    elevation: 6,
  },
});
