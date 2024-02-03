import { RootState } from '../index';

export const getUserIsLoading = (state: RootState) => state.userData.isLoading;
export const getUserToken = (state: RootState) => state.userData.user.token;
export const getUserAvatar = (state: RootState) => state.userData.user.avatar;
