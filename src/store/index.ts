import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { getStorageItem, STORAGE_KEY } from 'services/storage';
import { articlesApi } from '../api/articles';
import { creationArticleSlice } from '../features/create-article/model/store/slice';
import { popularSlice } from '../features/popular/model/store/slice';
import { userSlice } from './user/slice';

const getUserDataFromStorage = () => {
  const userData = getStorageItem(STORAGE_KEY.USER_DATA);
  const initialState = userSlice.getInitialState();

  if (userData) {
    return { ...initialState, user: userData };
  }

  return initialState;
};

export const rootStore = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [creationArticleSlice.name]: creationArticleSlice.reducer,
    [popularSlice.name]: popularSlice.reducer,
    [articlesApi.reducerPath]: articlesApi.reducer,
  },
  devTools: true,
  preloadedState: {
    userData: getUserDataFromStorage(),
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(articlesApi.middleware),
});

export type RootState = ReturnType<typeof rootStore.getState>;

export type AppDispatch = typeof rootStore.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

// const reducer = (state, action) => {
//   action.payload;
// };
