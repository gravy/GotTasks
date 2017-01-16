import React, { Component } from 'react';
import { connect } from 'react-redux';

import Todo from 'Todo';
import { filterTodos } from 'TodoAPI';

export class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {todos, showCompleted, searchText} = this.props;
    let renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing to do!</p>
        )
      }

      return filterTodos(todos, showCompleted, searchText).map((todo) => {
        return (
          <Todo key={todo.id} {...todo}/>
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
}

export default connect(
  (state) => {
    return state;
  }
)(TodoList);
