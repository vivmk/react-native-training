import {createSlice} from '@reduxjs/toolkit';

import {TodoType} from '../../models/todos.type';
import fetchTodos from './todos.api';

type InitialTodoType = {
  isTodosLoading: boolean;
  isTodosError: boolean;
  todosData: TodoType[];
};

const initialTodoState: InitialTodoType = {
  isTodosLoading: false,
  isTodosError: false,
  todosData: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState: initialTodoState,
  reducers: {},
  extraReducers: (builder: any) => {
    // api is loading data
    builder.addCase(fetchTodos.pending, (state: any) => {
      state.isTodosLoading = true;
    });
    // api has loaded data successfully
    builder.addCase(fetchTodos.fulfilled, (state: any, action: any) => {
      state.isTodosLoading = false;
      state.todosData = action.payload;
    });
    // api has failed to load data
    builder.addCase(fetchTodos.rejected, (state: any, action: any) => {
      console.log('todos fetch error: ', action.payload);
      state.isTodosError = true;
    });
  },
});

export default todoSlice.reducer;
