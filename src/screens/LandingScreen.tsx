import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';

import {useAppDispatch, useAppSelector} from '../redux/hooks';
import landingScreenStyles from './LandingScreen.styles';
import {fetchPosts} from '../redux/posts.api';
import {PostsList} from '../models/posts.interface';
import {checkAlternateValue} from '../utils/checkAlternateValue';
import {SearchBar} from './SearchBar';
import PostCard from './PostCard';

const FirstScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const {postsData, isLoading, isError} = useAppSelector(state => state.posts);

  // first is value, second is setter
  const [message, setMessage] = useState('');

  useEffect(() => {
    // call api only if there are no posts available
    !postsData.length && dispatch(fetchPosts());
    // useEffect code will re-run if any of below array value changes
  }, [dispatch, postsData]);

  useEffect(() => {
    if (isLoading) {
      setMessage('Loading ...');
    }
    if (isError) {
      setMessage('Something went wrong.');
    }
  }, [isLoading, isError]);

  const renderPosts = ({item: post, index}: PostsList) => (
    <PostCard key={index} post={post} />
  );

  if (checkAlternateValue(isLoading, isError)) {
    return (
      <View style={landingScreenStyles.rootContainer}>
        <Text style={landingScreenStyles.textMessage}>{message}</Text>
      </View>
    );
  }

  return (
    <View style={landingScreenStyles.rootContainer}>
      <Text style={landingScreenStyles.welcomeText}>Welcome!</Text>
      <SearchBar />
      <FlatList
        data={postsData}
        renderItem={renderPosts}
        fadingEdgeLength={50}
      />
    </View>
  );
};

export default FirstScreen;
