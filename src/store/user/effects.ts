import { createAsyncThunk } from '@reduxjs/toolkit';
import { post } from '../../services/transport';
import { AuthRequestData, UserResponse } from './types';

export const postAuthData = createAsyncThunk('userData/postAuth', async (payload: AuthRequestData, thunkApi) => {
  const { data } = await post<UserResponse>('/auth', payload);

  const userData = { ...data.data, token: data.token };

  return userData;
});

// postAuthData.fulfilled  - success
// postAuthData.rejected - error
// postAuthData.pending  - asyncThunk выполняется
