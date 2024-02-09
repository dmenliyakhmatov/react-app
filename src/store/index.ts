import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './user/slice';
import { useDispatch } from 'react-redux';
import { postsSlice } from '../features/popular/model/store/slice';
import { getStorageItem, STORAGE_KEY } from '../services/storage';

const getInitialUserState = () => {
  const stateFromStorage = getStorageItem(STORAGE_KEY.USER_DATA);
  const defaultInitState = userSlice.getInitialState();

  if (!stateFromStorage) return defaultInitState;

  return {
    ...defaultInitState,
    user: stateFromStorage,
  };
};

export const rootStore = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [postsSlice.name]: postsSlice.reducer,
  },
  preloadedState: {
    userData: getInitialUserState(),
  },
  devTools: true,
});

export type RootState = ReturnType<typeof rootStore.getState>;

// const reducer = (state, action) => {
//   action.payload;
// };

export type AppDispatch = typeof rootStore.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
