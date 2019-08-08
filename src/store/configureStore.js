import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

export const runSaga = async () => sagaMiddleware.run(rootSaga).done;

export const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(sagaMiddleware),
    ),
  );

  runSaga();

  return store;
}


// export const storeDispatch = action => store.dispatch(action);

// export default store;
