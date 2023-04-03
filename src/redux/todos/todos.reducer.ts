import {createSlice} from '@reduxjs/toolkit';

import {TodoType} from '../../models/todos.type';
import fetchTodos from './todos.api';

type InitialTodoType = {
  isTodosLoading: boolean;
  isTodosError: boolean;
  inProgressTodos: TodoType[];
  completedTodos: TodoType[];
  todosData: TodoType[];
};

const initialTodoState: InitialTodoType = {
  isTodosLoading: false,
  isTodosError: false,
  inProgressTodos: [],
  completedTodos: [],
  todosData: [],
};

const getFilteredTodos = (apiData: TodoType[], isCompleted: boolean) => {
  if (isCompleted) {
    return apiData.filter((todo: TodoType) => todo.completed);
  } else {
    return apiData.filter((todo: TodoType) => !todo.completed);
  }
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
      const allTodosData = action.payload;

      state.isTodosLoading = false;
      state.todosData = allTodosData;
      state.inProgressTodos = getFilteredTodos(allTodosData, false);
      state.completedTodos = getFilteredTodos(allTodosData, true);
    });
    // api has failed to load data
    builder.addCase(fetchTodos.rejected, (state: any, action: any) => {
      console.log('todos fetch error: ', action.payload);
      state.isTodosError = true;
    });
  },
});

export default todoSlice.reducer;
