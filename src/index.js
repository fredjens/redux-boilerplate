import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';

import todos from './ducks/todos';
import filters from './ducks/filters';

import App from './components/App';

const rootReducer = combineReducers({
  todos,
  filters,
});

const store = createStore(
  rootReducer,
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
