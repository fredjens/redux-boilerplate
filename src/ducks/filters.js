import deepFreeze from 'deep-freeze-es6';

// Actions

const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

// Action Creators

export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  filter,
});

// Reducers

const filters = (state = deepFreeze('SHOW_ALL'), action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export default filters;
