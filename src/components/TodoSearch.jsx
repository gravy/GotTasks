import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setSearchText, toggleShowCompleted } from 'actions';

export class TodoSearch extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {dispatch, showCompleted, searchText} = this.props;

    return (
      <div className="container__header">
        <div>
          <input type="search" ref="searchText" placeholder="Search todos" value={searchText}
                 onChange={() => {
                   let searchText = this.refs.searchText.value;
                   this.props.setSearchText(searchText);
                 }}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" checked={showCompleted}
                   onChange={() => {
                     this.props.toggleShowCompleted();
                   }}/>
            Show completed todos
          </label>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    showCompleted: state.showCompleted,
    searchText: state.searchText
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setSearchText: setSearchText,
    toggleShowCompleted: toggleShowCompleted
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoSearch);
