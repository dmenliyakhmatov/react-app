import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { postAuthData } from './effects';

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
  error: string | null;
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
  error: null,
};

export const userSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },

    clearUserStore: () => initialState,
  },
  extraReducers: builder => {
    builder.addCase(postAuthData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(postAuthData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = { ...action.payload.data, token: action.payload.token };
    });
    builder.addCase(postAuthData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message ?? 'Что-то пошло не так';
    });
  },
});

export const userActions = userSlice.actions;
