import {createSlice} from '@reduxjs/toolkit';

import {PostType} from '../../models/posts.type';
import {fetchPosts} from './posts.api';

interface InitialType {
  isPostsLoading: boolean;
  postsData: PostType[];
  isPostsError: boolean;
}

const initialState: InitialType = {
  isPostsLoading: false,
  postsData: [],
  isPostsError: false,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPosts.pending, state => {
      state.isPostsLoading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.isPostsLoading = false;
      state.postsData = action.payload;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      console.log('error: ', action.payload);
      state.isPostsError = true;
    });
  },
});

export default postsSlice.reducer;
