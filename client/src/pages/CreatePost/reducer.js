import { produce } from 'immer';

import { CREATE_POST } from './constants';

export const initialState = {
    dataPost: {},
};

export const storedKeyCreatePost = ['createPost'];

const createPostReducer = ( state = initialState, action ) =>
    produce(state, (draft) => {
        switch(action.type) {
            case CREATE_POST:
                draft.dataPost = action.dataPost;
                break;
        }
    });

export default createPostReducer;