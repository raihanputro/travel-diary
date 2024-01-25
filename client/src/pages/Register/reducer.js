import { produce } from 'immer';

import { SET_USER_REGISTER } from './constant';

export const initialState = {
    dataUser: {},
};

export const storedKeyRegister = ['register'];

const registerReducer = ( state = initialState, action ) =>
    produce(state, (draft) => {
        switch(action.type) {
            case SET_USER_REGISTER:
                draft.dataUser = action.dataUser;
                break;
        }
    });

export default registerReducer;