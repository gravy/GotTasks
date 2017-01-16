import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {Route, Router, hashHistory} from 'react-router';

import App from 'App';

//import actions from 'actions';
let actions = require('actions');
let store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New State', store.getState());
});

store.dispatch(actions.addTodo('Have breakfast'));
store.dispatch(actions.setSearchText('breakfast'));
store.dispatch(actions.toggleShowCompleted());

// Load foundation
$(document).foundation();

// App.css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}></Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
