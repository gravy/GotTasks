let redux = require('redux');

import rootReducer from '../reducers/index';

export const configure = (initialState = {}) => {
  let store = redux.createStore(
    rootReducer,
    initialState,
    redux.compose(
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  return store;
};
