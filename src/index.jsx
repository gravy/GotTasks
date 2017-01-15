import React from 'react';
import ReactDOM from 'react-dom';
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
  <Router history={hashHistory}>
    <Route path="/" component={App}></Route>
  </Router>,
  document.getElementById('root')
);
