import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthParams, AuthResponse } from './types';
import { post } from 'services/transport';
import { setStorageItem, STORAGE_KEY } from '../../services/storage';

export const postAuthData = createAsyncThunk('userData/postAuthData', async (authData: AuthParams, thunkAPI) => {
  const { data } = await post<AuthResponse>('/auth', authData);
  const userData = { token: data.token, ...data.data };

  setStorageItem(STORAGE_KEY.USER_DATA, userData);

  return userData;
});
