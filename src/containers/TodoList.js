import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleTodo } from '../ducks/todos';

import Todo from '../components/Todo';
import getVisibleTodos from '../utils/getVisibleTodos';

const TodoList = (props) => {
  return (
    <ul>
      {getVisibleTodos(props.todos, props.visibilityFilter).map(todo =>
        <Todo
          key={todo.id}
          text={todo.text}
          completed={todo.completed}
          onClick={() => props.toggleTodo(todo.id)}
        />
      )}
    </ul>
  )
};

const mapStateToProps = (state) => ({
  todos: state.todos,
  visibilityFilter: state.filters,
})

const mapDispatchToProps =  (dispatch) => bindActionCreators({
  toggleTodo
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
