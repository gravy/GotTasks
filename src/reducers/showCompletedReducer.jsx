import { TOGGLE_SHOW_COMPLETED } from '../actions/actions';

export const showCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_SHOW_COMPLETED:
      return !state;
    default:
      return state;
  }
};
