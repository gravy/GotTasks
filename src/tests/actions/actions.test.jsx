import expect from 'expect';

import { setSearchText, addTodo, toggleShowCompleted, toggleTodo } from 'actions';

describe('Actions', () => {
  it ('should generate search text action', () => {
    let action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    };

    let res = setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it ('should generate toggleShowCompleted action', () => {
    let action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };

    let res = toggleShowCompleted();

    expect(res).toEqual(action);
  });

  it ('should generate addTodo action', () => {
    let action = {
      type: 'ADD_TODO',
      text: 'Some todo'
    };

    let res = addTodo(action.text);

    expect(res).toEqual(action);
  });

  it ('should generate toggleTodo action', () => {
    let action = {
      type: 'TOGGLE_TODO',
      id: 1
    };

    let res = toggleTodo(action.id);

    expect(res).toEqual(action);
  });
});
