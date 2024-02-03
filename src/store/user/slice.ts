import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

type User = {
  id: number | null;
  fullName: string | null;
  email: string | null;
  token: string | null;
  avatar: string | null;
};

type UserSliceState = {
  user: User;
  isLoading: boolean;
};

const initialState: UserSliceState = {
  user: {
    id: null,
    fullName: null,
    email: null,
    token: null,
    avatar: null,
  },
  isLoading: false,
};

export const userSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    clearUserStore: () => initialState,
  },
});

export const userActions = userSlice.actions;

console.log(userActions.clearUserStore());
