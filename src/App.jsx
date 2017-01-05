import React, { Component } from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Clean the yard'
        },
        {
          id: 3,
          text: 'Program'
        },
        {
          id: 4,
          text: 'Eat dinner'
        },
      ]
    };
  }

  handleAddTodo(text) {
    alert('new todo: ' + text);
  }

  render() {
    var {todos} = this.state;

    return (
      <div className="App">
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
};
