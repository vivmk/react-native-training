import {configureStore} from '@reduxjs/toolkit';

import postsReducer from './posts/posts.reducer';
import todosReducer from './todos/todos.reducer';
import usersReducer from './users/users.reducer';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    todos: todosReducer,
    users: usersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
