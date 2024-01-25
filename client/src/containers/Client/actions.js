import { SET_LOGIN, SET_TOKEN, SET_INFO_LOGIN_USER } from '@containers/Client/constants';

export const setLogin = (login) => ({
  type: SET_LOGIN,
  login,
});

export const setToken = (token) => ({
  type: SET_TOKEN,
  token,
});

export const setInfoLoginUser = (data) => ({
  type: SET_INFO_LOGIN_USER,
  data
});
