import { produce } from 'immer';

import { SET_USER } from './constant';

export const initialState = {
    dataUser: {},
};

export const storedKeyProfile = ['dataUser'];

const profilReducer = ( state = initialState, action ) =>
    produce(state, (draft) => {
        switch(action.type) {
            case SET_USER:
                draft.dataUser = action.dataUser;
                break;
        }
    });

export default profilReducer;