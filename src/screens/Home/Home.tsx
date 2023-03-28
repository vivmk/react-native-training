import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {fetchPosts} from '../../redux/posts/posts.api';
import {checkAlternateValue} from '../../utils/checkAlternateValue';
import landingScreenStyles from './Home.styles';
import {SearchBar} from './SearchBar';
import localStrings from '../../constants/global.strings';
import {emptyString} from '../../constants/global.constants';
import {Posts} from './Posts';

/**
 * component to show landing screen
 * @returns {JSX.Element}
 */
const Home: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const {postsData, isPostsLoading, isPostsError} = useAppSelector(
    state => state.posts,
  );

  const [message, setMessage] = useState(emptyString);
  const [searchText, setSearchText] = useState(emptyString);

  useEffect(() => {
    !postsData.length && dispatch(fetchPosts());
  }, [dispatch, postsData]);

  useEffect(() => {
    isPostsLoading && setMessage(localStrings.home.loading);
    isPostsError && setMessage(localStrings.home.somethingWrong);
  }, [isPostsLoading, isPostsError]);

  if (checkAlternateValue(isPostsLoading, isPostsError)) {
    return (
      <View style={landingScreenStyles.rootContainer}>
        <Text style={landingScreenStyles.textMessage}>{message}</Text>
      </View>
    );
  }

  return (
    <View style={landingScreenStyles.rootContainer}>
      <Text style={landingScreenStyles.welcomeText}>
        {localStrings.home.welcome}
      </Text>
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      <Posts searchText={searchText} />
    </View>
  );
};

export default Home;
