import {Image, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import profileStyles from './Profile.styles';
import localUrls from '../../constants/global.urls';
import {emptyString, sampleName} from '../../constants/global.constants';
import localStrings from '../../constants/global.strings';
import {ProfileMenu} from './ProfileMenu';
import fetchTodos from '../../redux/todos/todos.api';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {checkAlternateValue} from '../../utils/checkAlternateValue';
import landingScreenStyles from '../Home/Home.styles';

/**
 * component to show profile screen
 * @returns {JSX.Element}
 */
const Profile: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [apiMessage, setApiMessage] = useState(emptyString);

  const {todosData, isTodosLoading, isTodosError} = useAppSelector(
    (state: any) => state.todos,
  );

  useEffect(() => {
    !todosData.length && dispatch(fetchTodos());
  }, [dispatch, todosData.length]);

  useEffect(() => {
    isTodosLoading && setApiMessage(localStrings.home.loading);
    isTodosError && setApiMessage(localStrings.home.somethingWrong);
  }, [isTodosLoading, isTodosError]);

  if (checkAlternateValue(isTodosLoading, isTodosError)) {
    return (
      <View style={landingScreenStyles.rootContainer}>
        <Text style={landingScreenStyles.textMessage}>{apiMessage}</Text>
      </View>
    );
  }

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
