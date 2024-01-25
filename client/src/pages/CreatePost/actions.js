import { CREATE_POST } from "./constants";

export const setCreatePost = ( token, dataPost ) => ({
    type: CREATE_POST,
    token,
    dataPost
});