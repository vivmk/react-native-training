import {createAsyncThunk} from '@reduxjs/toolkit';

const fetchUsers = createAsyncThunk('fetchUsers', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return response.json();
});

export default fetchUsers;
