import React, { Component } from 'react';
import { connect } from 'react-redux';
import debounce from "lodash.debounce";

import { onSearchLogs } from '../actions';

class LogForm extends Component {
  state = {
    searchTerm: ""
  };

  handleInputChange = evt => {
    const searchTerm = evt.target.value;
    this.setState({ searchTerm });
    if (!evt.target.value) {
      console.log(this.props);
      console.log(this.state);
    }
  }

  render() {
    const { searchTerm } = this.state;
    const { onSearchLogs, logs } = this.props;
    const debounceSearch = debounce(() => onSearchLogs(searchTerm, logs), 750);

    return (
      <form>
        <input
          type="search"
          placeholder="Search Alarm Logs"
          onChange={this.handleInputChange}
          onKeyUp={debounceSearch}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { onSearchLogs })(LogForm);