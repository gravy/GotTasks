export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';
export const TOGGLE_SHOW_COMPLETED = 'TOGGLE_SHOW_COMPLETED';
export const ADD_TODO = 'ADD_TODO';
export const ADD_TODOS = 'ADD_TODOS';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const setSearchText = (searchText) => {
  return {
    type: SET_SEARCH_TEXT,
    searchText
  }
};

export const toggleShowCompleted = () => {
  return {
    type: TOGGLE_SHOW_COMPLETED
  }
};

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text
  }
};

export const addTodos = (todos) => {
  return {
    type: ADD_TODOS,
    todos
  }
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id
  }
};
