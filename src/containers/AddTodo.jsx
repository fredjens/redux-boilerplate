import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import autoBind from 'auto-bind';

import { addTodoItem } from '../ducks/todos';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      input: '',
    };
  }

  submitTodo(event) {
    event.preventDefault();
    if (this.state.input.length < 3) { return };
    this.props.addTodoItem(this.state.input);
    this.setState({input: ''});
  }

  hanldeInput(field, event) {
    this.setState({[field]: event.target.value});
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.submitTodo(e)}>
          <input
            value={this.state.input}
            onChange={(e) => this.hanldeInput('input', e)}
          />
          <button
            type="submit"
            disabled={this.state.input.length < 3}
          >
            Add Todo
          </button>
        </form>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => bindActionCreators({
  addTodoItem
}, dispatch);

export default connect(
  undefined,
  mapDispatchToProps
)(AddTodo);
