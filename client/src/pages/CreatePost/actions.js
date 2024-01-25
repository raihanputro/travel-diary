import { CREATE_POST } from "./constants";

export const setCreatePost = ( dataPost ) => ({
    type: CREATE_POST,
    dataPost
});