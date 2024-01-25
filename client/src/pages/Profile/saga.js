import { takeLatest, call, put } from 'redux-saga/effects';

import { getUser } from '@domain/api';
import { setUser } from './action';
import { GET_USER } from './constant';

function* doProfile() {
    try {
        const data = yield call(getUser);
        yield put(setUser(data?.data));
    } catch(error) {
        console.log(error, "<<SAGA ERROR")
    }
}

export default function* profileSaga() {
    yield takeLatest(GET_USER, doProfile);
}