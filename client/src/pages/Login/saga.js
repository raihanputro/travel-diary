import { takeLatest, call, put } from 'redux-saga/effects';

import { login } from '@domain/api';
import { setLogin, setToken, setInfoLoginUser } from '@containers/Client/actions';
import { SET_USER_LOGIN } from './constant';

function* doLogin({ dataUser }) {
    try {
        const res = yield call(login, dataUser);
        console.log(res.data.token, 'resssss');
        console.log(res.data.user, 'test');
        yield put(setLogin({
            login: true,
        }));
        yield put(setToken({
            token: res?.data?.token,
        }));
        yield put(setInfoLoginUser(res?.data?.user))
    } catch(error) {
        console.log(error, "<<SAGA ERROR")
    }
}

export default function* loginSaga() {
    yield takeLatest(SET_USER_LOGIN, doLogin);
}