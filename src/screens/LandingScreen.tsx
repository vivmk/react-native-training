import React, {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';

import {useAppDispatch, useAppSelector} from '../redux/hooks';
import landingScreenStyles from './LandingScreen.styles';
import {fetchPosts} from '../redux/posts.api';
import {PostsList} from '../models/posts.interface';

const FirstScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const {postsData, isLoading, isError} = useAppSelector(state => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const renderPosts = ({item: post, key}: PostsList) => {
    return (
      <View key={key} style={{borderColor: 'black', borderWidth: 2}}>
        <Text>{post.title}</Text>
      </View>
    );
  };

  if (isLoading) {
    return <Text>Loading ...</Text>;
  }

  if (isError) {
    return <Text>Something went wrong.</Text>;
  }

  return (
    <View style={landingScreenStyles.rootContainer}>
      <Text style={landingScreenStyles.textMessage}>
        <FlatList data={postsData} renderItem={renderPosts} />
      </Text>
    </View>
  );
};

export default FirstScreen;
