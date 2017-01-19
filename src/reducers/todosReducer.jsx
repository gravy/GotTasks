import uuid from 'node-uuid';
import moment from 'moment';

import { ADD_TODO, TOGGLE_TODO, ADD_TODOS } from '../actions/actions';


export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: uuid(),
          text: action.text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ];

    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.id) {
          let nextCompleted = !todo.completed;

          return {
            ...todo,
            completed: nextCompleted,
            completedAt: nextCompleted ? moment().unix() : undefined
          };
        } else {
          return todo;
        }
      });

    case ADD_TODOS:
      return [
        ...state,
        ...action.todos
      ];


    default:
      return state;
  }
};