import React from 'react';
import { Link } from 'react-router';

import Filter from '../containers/Filter';
import AddTodo from '../containers/AddTodo'
import TodoList from '../containers/TodoList';

const Home = () => (
  <article>
    <AddTodo />
    <TodoList />
    <Filter />
    <Link to="/about">About</Link>
  </article>
)

export default Home;
