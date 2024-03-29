import { produce } from 'immer';

import { SET_LOGIN, SET_TOKEN, SET_INFO_LOGIN_USER } from '@containers/Client/constants';

export const initialState = {
  login: false,
  token: null,
  infoLoginUser: null
};

export const storedKey = ['token', 'login', 'infoLoginUser'];

const clientReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_LOGIN:
        draft.login = action.login;
        break;
      case SET_TOKEN:
        draft.token = action.token;
        break;
      case SET_INFO_LOGIN_USER:
        draft.infoLoginUser = action.data;
    }
  });

export default clientReducer;
