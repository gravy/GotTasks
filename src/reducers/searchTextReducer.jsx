import { SET_SEARCH_TEXT } from '../actions/actions';

export const searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case SET_SEARCH_TEXT:
      return action.searchText;
    default:
      return state;
  }
};
