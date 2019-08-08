import {
  GET_REPOS,
  GET_REPOS_SUCCESS,
  GET_REPOS_FAIL
} from './types'

export const getRepos = org => ({
  payload: { org },
  type: GET_REPOS
});

export const getReposSuccess = (name, repos) => ({
  payload: { name, repos },
  type: GET_REPOS_SUCCESS
});

export const getReposFail = error => ({
  payload: { error },
  type: GET_REPOS_FAIL
});

