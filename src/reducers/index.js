import { combineReducers } from 'redux';

import Repos from './ReposReducer';

const appReducer = combineReducers({
  Repos
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined
  }
  return appReducer(state, action);
}

export default rootReducer;
