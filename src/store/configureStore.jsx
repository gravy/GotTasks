let redux = require('redux');

import { searchTextReducer, showCompletedReducer, todosReducer } from 'reducers';

export const configure = () => {
  let reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  });

  let store = redux.createStore(
    reducer,
    redux.compose(
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  )

  return store;
};
