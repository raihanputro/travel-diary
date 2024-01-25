import { GET_USER, SET_USER } from "./constant";

export const getUser = () => ({
    type: GET_USER
});

export const setUser = ( dataUser ) => ({
    type: SET_USER,
    dataUser
});