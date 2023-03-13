import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

import {useAppDispatch, useAppSelector} from './app/hooks';
import {getPosts} from './features/posts/posts';

const FirstScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const {postsData} = useAppSelector(state => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 18, fontWeight: '600'}}>
        Title of 2nd post: {postsData?.postsResult[1]?.title}
      </Text>
    </View>
  );
};

export default FirstScreen;
