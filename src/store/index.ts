import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { userSlice } from './user/slice';

export const rootStore = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof rootStore.getState>;

export type AppDispatch = typeof rootStore.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

// const reducer = (state, action) => {
//   action.payload;
// };
