import { SET_USER_LOGIN } from "./constant"

export const setUserLogin = ( dataUser ) => ({
    type: SET_USER_LOGIN,
    dataUser
})