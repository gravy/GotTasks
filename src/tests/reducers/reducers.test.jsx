import expect from 'expect';
import df from 'deep-freeze-strict';

import { searchTextReducer, showCompletedReducer, todosReducer } from 'reducers';

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it ('should set searchText', () => {
      let action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'some text'
      };
      let res = searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it ('should toggle showCompleted', () => {
      let action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      let res = showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it ('should add new todo to existing todos', () => {
      let action = {
        type: 'ADD_TODO',
        text: 'some todo'
      };
      let res = todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual('some todo');
    });

    it ('should toggle todo item status', () => {
      let todos = [
        {
          id: '1',
          text: 'some todo',
          completed: true,
          createdAt: 123,
          completedAt: 175
        }
      ];

      let action = {
        type: 'TOGGLE_TODO',
        id: '1'
      };
      let res = todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toEqual(undefined);
    });

    it ('should add existing todos', () => {
      let todos = [
        {
          id: 123,
          text: 'A todo item',
          completed: false,
          createdAt: 33000,
          completedAT: undefined
        }
      ];

      let action = {
        type: 'ADD_TODOS',
        todos
      };

      let res = todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });
  });
});
