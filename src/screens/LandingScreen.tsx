import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';

import {useAppDispatch, useAppSelector} from '../redux/hooks';
import landingScreenStyles from './LandingScreen.styles';
import {fetchPosts} from '../redux/posts.api';
import {PostsList, PostType} from '../models/posts.interface';
import {checkAlternateValue} from '../utils/checkAlternateValue';
import {SearchBar} from './SearchBar';
import PostCard from './PostCard';

const FirstScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const {postsData, isLoading, isError} = useAppSelector(state => state.posts);

  // first is value, second is setter
  const [message, setMessage] = useState('');
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    // call api only if there are no posts available
    !postsData.length && dispatch(fetchPosts());
    // useEffect code will re-run if any of below array value changes
  }, [dispatch, postsData]);

  useEffect(() => {
    isLoading && setMessage('Loading ...');
    isError && setMessage('Something went wrong.');
  }, [isLoading, isError]);

  const searchByText = (post: PostType) => {
    return (
      post.title.toLowerCase().includes(searchText.toLowerCase()) ||
      searchText === ''
    );
  };

  const filteredPostsData = postsData.filter(searchByText);

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
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      <FlatList
        data={filteredPostsData}
        renderItem={renderPosts}
        fadingEdgeLength={50}
      />
    </View>
  );
};

export default FirstScreen;
