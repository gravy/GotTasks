import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { toggleTodo } from 'actions';

export class Todo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {id, text, completed, createdAt, completedAt, dispatch} = this.props;
    let todoClassName = completed ? 'todo todo-completed' : 'todo';
    let renderDate = () => {
      let message = 'Created ';
      let timestamp = createdAt;

      if (completedAt) {
        message = 'Completed ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };

    return (
      <div className={todoClassName} onChange={() => {
        //this.props.onToggle(id);
        dispatch(toggleTodo(id))
      }}>
        <div>
          <input type="checkbox" checked={completed}/>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo_subtext">{renderDate()}</p>
        </div>
      </div>
    );
  }
}

export default connect()(Todo);
