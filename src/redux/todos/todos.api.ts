import {createAsyncThunk} from '@reduxjs/toolkit';

const fetchTodos = createAsyncThunk('fetchTodos', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  return response.json();
});

export default fetchTodos;
