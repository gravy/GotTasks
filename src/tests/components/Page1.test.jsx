import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import Page1 from 'Page1';

describe('Page1', () => {
  it ('should exist', () => {
    expect(Page1).toExist();
  });
});
