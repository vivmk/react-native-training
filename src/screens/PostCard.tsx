import {StyleSheet, Text, View} from 'react-native';

import {PostType} from '../models/posts.interface';

const PostCard = ({post}: {post: PostType}) => {
  return (
    <View style={postCardStyles.rootContainer}>
      <Text style={postCardStyles.titleText}>
        {post.id}. {post.title}
      </Text>
      <Text style={postCardStyles.postBody}>{post.body}</Text>
    </View>
  );
};

const postCardStyles = StyleSheet.create({
  postBody: {
    marginTop: 5,
    fontSize: 14,
  },
  titleText: {
    fontSize: 16,
    fontWeight: '700',
  },
  rootContainer: {
    borderWidth: 2,
    borderColor: 'green',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
  },
});

export default PostCard;
