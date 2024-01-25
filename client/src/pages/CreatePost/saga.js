import { takeLatest, call, put } from 'redux-saga/effects';
import { createPost } from '@domain/api';
import { CREATE_POST } from './constants';
import { setLoading } from '@containers/App/actions';

function* doCreatePost({ token, dataPost }) {
    yield put(setLoading(true));
    try {
        yield call(createPost, token, dataPost );
        console.log(token, '<<token create post')
    } catch(error) {
        console.log(error, "<<SAGA ERROR")
    }
    yield put(setLoading(false));
}

export default function* createPostSaga() {
    yield takeLatest(CREATE_POST, doCreatePost);
}