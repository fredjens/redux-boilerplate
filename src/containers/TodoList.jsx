import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleTodo } from '../ducks/todos';

import Todo from '../components/Todo';
import getVisibleTodos from '../utils/getVisibleTodos';
import Ul from '../primitives/Ul';

const TodoList = (props) => {
  const todos = getVisibleTodos(props.todos, props.visibilityFilter);

  return (
    <Ul>
      {todos.map((todo, index) =>
        <Todo
          key={index}
          text={todo.text}
          completed={todo.completed}
          onClick={() => props.toggleTodo(todo.id)}
        />
      )}
    </Ul>
  )
};

const mapStateToProps = (state) => ({
  todos: state.todos,
  visibilityFilter: state.filters.active,
})

const mapDispatchToProps =  (dispatch) => bindActionCreators({
  toggleTodo
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
