import {createSlice} from '@reduxjs/toolkit';

import {UserType} from '../../models/users.type';
import fetchUsers from './users.api';

type InitialUserType = {
  isUsersLoading: boolean;
  isUsersError: boolean;
  usersData: UserType[];
};

const initialUserState: InitialUserType = {
  isUsersLoading: false,
  isUsersError: false,
  usersData: [],
};

const userSlice = createSlice({
  name: 'users',
  initialState: initialUserState,
  reducers: {},
  extraReducers: (builder: any) => {
    // api is loading data
    builder.addCase(fetchUsers.pending, (state: any) => {
      state.isUsersLoading = true;
    });
    // api has loaded data successfully
    builder.addCase(fetchUsers.fulfilled, (state: any, action: any) => {
      state.isUsersLoading = false;
      state.usersData = action.payload;
    });
    // api has failed to load data
    builder.addCase(fetchUsers.rejected, (state: any, action: any) => {
      console.log('users fetch error: ', action.payload);
      state.isUsersError = true;
    });
  },
});

export default userSlice.reducer;
