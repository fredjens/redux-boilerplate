import React from 'react';

import Filter from '../containers/Filter';
import AddTodo from '../containers/AddTodo'
import TodoList from '../containers/TodoList';

const App = () => (
  <div>
    <AddTodo />
    <TodoList />
    <Filter />
  </div>
)

export default App