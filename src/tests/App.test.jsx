import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

import App from '../App';

describe('App', () => {

  it ('should properly run tests', () => {
    expect(1).toBe(1);
  });

  it ('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it ('should add a todo to the todos state on handleAddTodo', () => {
    let todoText = 'test text';
    let todoApp = TestUtils.renderIntoDocument(<App/>);

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
  });

  it ('should toggle completed value when handleToggle called', () => {
    let todoData = {
      id: 11,
      text: 'Test features',
      completed: false
    };

    let todoApp = TestUtils.renderIntoDocument(<App/>);
    todoApp.setState({todos: [todoData]});

    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(true);
  });
});
