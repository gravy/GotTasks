import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {Route, Router, hashHistory} from 'react-router';

import App from 'App';

//import actions from 'actions';
let actions = require('actions');
let store = require('configureStore').configure();
let TodoAPI = require('TodoAPI');

store.subscribe(() => {
  let state = store.getState();
  console.log('New State', state);
  TodoAPI.setTodos(state.todos);
});

let initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

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
