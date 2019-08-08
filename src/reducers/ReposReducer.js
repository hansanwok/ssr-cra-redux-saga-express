import {
  GET_REPOS,
  GET_REPOS_SUCCESS,
  GET_REPOS_FAIL
} from '../actions/types';

const initialState = {
  repos: [],
  loading: false,
  name: '',
  error: null,
};

const ReposReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_REPOS:
      return {
        ...state,
        loading: true,
      }

    case GET_REPOS_SUCCESS:
      return {
        ...state,
        loading: false,
        name: action.payload.name,
        repos: action.payload.repos
      }

    case GET_REPOS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }

    default:
      return state;
  }
}

export default ReposReducer;
