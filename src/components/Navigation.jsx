import React, { Component } from 'react';
import {Link, IndexLink} from 'react-router';

let Navigation = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
            App Name
          </li>
          <li>
            <IndexLink to="/" activeClassName="active-link">Page1</IndexLink>
          </li>
          <li>
            <Link to="/page2" activeClassName="active-link">Page2</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created by <a href="https://github.com/gravy/" target="_blank">Mark Eades</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
