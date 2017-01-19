import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addTodo } from 'actions';

export class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let todoText = this.refs.todoText.value;

    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      this.props.addTodo(todoText);
    } else {
      this.refs.todoText.focus();
    }
  }

  render() {
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="What do you need to do?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addTodo: addTodo
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddTodo);
