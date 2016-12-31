import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import App from 'App';
import Page1 from 'Page1';
import Page2 from 'Page2';

// Load foundation
$(document).foundation();

// App.css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="page2" component={Page2} />
      <IndexRoute component={Page1} />
    </Route>
  </Router>,
  document.getElementById('root')
);
