import { call, put, takeLatest, fork } from 'redux-saga/effects';
import octokit from '@octokit/rest';
import { GET_REPOS } from '../actions/types';
import { getReposSuccess, getReposFail } from '../actions';

const github = new octokit();

function* handleGetRepos(action) {
  try {
    const { org } = action.payload;
    const res = yield call(github.repos.listForOrg, { org });
    yield put(getReposSuccess(org, res.data));
  } catch (e) {
    yield put(getReposFail(e));
  }
}

function* watchGetRepos() {
  yield takeLatest(GET_REPOS, handleGetRepos);
}

export default function* reposSaga() {
  yield (fork(watchGetRepos))
}
