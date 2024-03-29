import { all } from 'redux-saga/effects';

import appSaga from '@containers/App/saga';
import registerSaga from '@pages/Register/saga';
import loginSaga from '@pages/Login/saga';
import createPostSaga from '@pages/CreatePost/saga';
import profileSaga from '@pages/Profile/saga';

export default function* rootSaga() {
  yield all([
    appSaga(),
    registerSaga(),
    loginSaga(),
    createPostSaga(),
    profileSaga()
  ]);
}
