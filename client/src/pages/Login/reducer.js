import { produce } from 'immer';

import { SET_USER_LOGIN } from './constant';

export const initialState = {
    dataUser: {},
};

export const storedKeyLogin = ['login'];

const loginReducer = ( state = initialState, action ) =>
    produce(state, (draft) => {
        switch(action.type) {
            case SET_USER_LOGIN:
                draft.dataUser = action.dataUser;
                break;
        }
    });

export default loginReducer;