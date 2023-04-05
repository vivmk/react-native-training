import React from 'react';
import {Text, View} from 'react-native';
import localStrings from '../../../../constants/global.strings';

import postCardStyles from './PostCard.styles';
import {PostCardPropsType} from './PostCard.type';

/**
 * card to display one particular post item
 * @param {PostCardPropsType} postCardProps
 * @returns {JSX.Element}
 */
const PostCard: React.FC<PostCardPropsType> = (
  postCardProps: PostCardPropsType,
): JSX.Element => {
  const {post} = postCardProps;

  return (
    <View style={postCardStyles.rootContainer}>
      <Text style={postCardStyles.titleText}>
        {post.id}
        {localStrings.postCard.singleDot} {post.title}
      </Text>
      <Text style={postCardStyles.postBody}>{post.body}</Text>
    </View>
  );
};

export default PostCard;
