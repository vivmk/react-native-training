import {Image, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import {ProfileMenu} from './ProfileMenu';
import profileStyles from './Profile.styles';
import localUrls from '../../constants/global.urls';
import {checkAlternateValue} from '../../utils/checkAlternateValue';
import {emptyString, sampleName} from '../../constants/global.constants';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import localStrings from '../../constants/global.strings';
import landingScreenStyles from '../Home/Home.styles';
import fetchTodos from '../../redux/todos/todos.api';

/**
 * component to show profile screen
 * @returns {JSX.Element}
 */
const Profile: React.FC = (): JSX.Element => {
  // to make api call
  const dispatch = useAppDispatch();

  // to control api error states
  const [apiMessage, setApiMessage] = useState(emptyString);

  // to get api data / error values
  const {todosData, isTodosLoading, isTodosError} = useAppSelector(
    (state: any) => state.todos,
  );

  // make api call on first render
  useEffect(() => {
    !todosData.length && dispatch(fetchTodos());
  }, [dispatch, todosData.length]);

  // set api loading error messages in local state
  useEffect(() => {
    isTodosLoading && setApiMessage(localStrings.home.loading);
    isTodosError && setApiMessage(localStrings.home.somethingWrong);
  }, [isTodosLoading, isTodosError]);

  // if loading or error display same
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
