import { SET_USER_REGISTER} from "./constant"

export const setUserRegister = ( dataUser ) => ({
    type: SET_USER_REGISTER,
    dataUser
})