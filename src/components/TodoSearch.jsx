import React, { Component } from 'react';

export default class TodoSearch extends Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let searchText = this.refs.searchText.value;

    if (searchText.length > 0) {
      this.refs.searchText.value = '';
      this.props.onSearch(searchText);
    } else {
      this.refs.searchText.focus();
    }
  }

  handleSearch() {
    let showCompleted = this.refs.showCompleted.checked;
    let searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);
  }

  render() {
    return (
      <div>
        <div>
          <input type="search" ref="searchText" placeholder="Search todos" onChange={this.handleSearch}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
            Show completed todos
          </label>
        </div>
      </div>
    );
  }
}
