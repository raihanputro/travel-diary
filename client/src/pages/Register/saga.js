import { takeLatest, call, put } from 'redux-saga/effects';

import { register } from '@domain/api';
import { SET_USER_REGISTER } from './constant';

function* doRegister({ dataUser }) {
    try {
        yield call(register, dataUser);
    } catch(error) {
        console.log(error, "<<SAGA ERROR")
    }
}

export default function* registerSaga() {
    yield takeLatest(SET_USER_REGISTER, doRegister);
}