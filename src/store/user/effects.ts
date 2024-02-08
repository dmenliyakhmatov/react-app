import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthParams, AuthResponse } from './types';
import { post } from 'services/transport';

export const postAuthData = createAsyncThunk('userData/postAuthData', async (authData: AuthParams, thunkAPI) => {
  const { data } = await post<AuthResponse>('/auth', authData);
  console.log(data);
  return data;
});
