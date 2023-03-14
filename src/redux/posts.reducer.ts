import {createSlice} from '@reduxjs/toolkit';

import {PostType} from '../models/posts.interface';
import {fetchPosts} from './posts.api';

interface InitialType {
  isLoading: boolean;
  postsData: PostType[];
  isError: boolean;
}

const initialState: InitialType = {
  isLoading: false,
  postsData: [],
  isError: false,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPosts.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.postsData = action.payload;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      console.log('error: ', action.payload);
      state.isError = true;
    });
  },
});

export default postsSlice.reducer;
