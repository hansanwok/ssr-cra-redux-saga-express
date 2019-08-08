import { all } from 'redux-saga/effects';

import reposSaga from './ReposSaga';

export default function* rootSaga() {
  yield all([
    reposSaga(),
  ]);
}
