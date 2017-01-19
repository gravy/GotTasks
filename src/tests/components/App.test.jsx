import React from 'react';
import { Provider } from 'react-redux';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

import { configure } from 'configureStore';
import App from 'App';
import TodoList from 'TodoList';

describe('App', () => {
  it ('should exist', () => {
    expect(App).toExist();
  });

  it ('should render TodoList', () => {
    let store = configure();
    let provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <App/>
      </Provider>
    );

    let app = TestUtils.scryRenderedComponentsWithType(provider, App)[0];
    let todoList = TestUtils.scryRenderedComponentsWithType(app, TodoList);

    expect(todoList.length).toEqual(1);
  });
});
