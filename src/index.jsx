import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, hashHistory} from 'react-router';
import App from 'App';

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
