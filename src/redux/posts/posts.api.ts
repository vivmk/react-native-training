import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk('fetchPosts', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json();
});
