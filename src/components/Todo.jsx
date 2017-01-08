import React, { Component } from 'react';

export default class Todo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {id, text, completed} = this.props;

    return (
      <div>
        <input type="checkbox" onChange={() => {
          this.props.onToggle(id);
        }} checked={completed}/> {text}
      </div>
    );
  }

}

