import React, { Component } from 'react';
import Todo from 'Todo';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    let {todos} = this.props;
    let renderTodos = () => {
      return todos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo}/>
        );
      });
    };

    return (
      <div>
        <ul className="dropdown menu" data-dropdown-menu>
          <li>
            <a href="#">This is a Dropdown</a>
            <ul className="menu">
              <li><a href="#">Item 1</a></li>
              <li><a href="#">Item 2</a></li>
              <li><a href="#">Item 3</a></li>
            </ul>
          </li>
        </ul>

        {renderTodos()}
      </div>
    );
  }

}

export default TodoList;
