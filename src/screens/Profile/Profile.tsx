import {Image, Text, View} from 'react-native';
import React from 'react';

import {ProfileMenu} from './ProfileMenu';
import profileStyles from './Profile.styles';
import localUrls from '../../constants/global.urls';
import {sampleName} from '../../constants/global.constants';
import localStrings from '../../constants/global.strings';

/**
 * component to show profile screen
 * @returns {JSX.Element}
 */
const Profile: React.FC = (): JSX.Element => {
  return (
    <View style={profileStyles.rootContainer}>
      <View style={profileStyles.headerContainer}>
        {/* picture */}
        <View style={profileStyles.pictureContainer}>
          <Image
            style={profileStyles.iconSize}
            source={{uri: localUrls.profile.profilePic}}
          />
        </View>
        {/* name and bio */}
        <View style={profileStyles.infoContainer}>
          <Text style={profileStyles.nameText}>{sampleName}</Text>
          <Text style={profileStyles.bioText}>
            {localStrings.profile.bioText}
          </Text>
        </View>
      </View>
      <ProfileMenu />
    </View>
  );
};

export default Profile;
