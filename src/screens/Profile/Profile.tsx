import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import localUrls from '../../constants/global.urls';

const Profile = () => {
  return (
    <View style={profileStyles.rootContainer}>
      <View style={profileStyles.headerContainer}>
        <View style={profileStyles.pictureContainer}>
          <Image
            style={profileStyles.iconSize}
            source={{uri: localUrls.profile.profilePic}}
          />
        </View>
        <View style={profileStyles.infoContainer}>
          <Text style={profileStyles.nameText}>John Doe</Text>
          <Text style={profileStyles.bioText}>
            An investment in knowledge pays the best!
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const profileStyles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  iconSize: {
    width: 50,
    height: 50,
  },
  headerContainer: {
    flexDirection: 'row',
  },
  bioText: {
    width: 200,
    fontSize: 15,
    marginTop: 5,
    color: 'green',
    fontWeight: '500',
  },
  nameText: {
    fontSize: 25,
    fontWeight: '700',
  },
  infoContainer: {
    paddingVertical: 40,
  },
  pictureContainer: {
    width: 100,
    height: 100,
    marginVertical: 30,
    marginHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: 'green',
    backgroundColor: 'white',
    elevation: 6,
  },
});
