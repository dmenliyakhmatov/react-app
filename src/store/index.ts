import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './user/slice';
import { useDispatch } from 'react-redux';

export const rootStore = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof rootStore.getState>;

// const reducer = (state, action) => {
//   action.payload;
// };

export type AppDispatch = typeof rootStore.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
