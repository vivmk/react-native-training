import {createSlice} from '@reduxjs/toolkit';

import {getPostsFromApi} from './postsFromApi';

interface PostsType {
  postsData: any;
}

const initialState: PostsType = {
  postsData: {},
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPosts(state) {
      state.postsData = getPostsFromApi();
    },
  },
});

export const {getPosts} = postsSlice.actions;
export default postsSlice.reducer;
