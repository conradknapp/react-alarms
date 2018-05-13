import React, { Component } from 'react';
import { connect } from 'react-redux';
import debounce from "lodash.debounce";

import { onSearchLogs } from '../actions';

class LogForm extends Component {
  render() {
    const { onSearchLogs, logs, handleInputChange, searchTerm } = this.props;
    const debounceSearch = debounce(() => onSearchLogs(searchTerm, logs), 750);

    return (
      <form>
        <input
          type="search"
          placeholder="Search Alarm Logs"
          onChange={handleInputChange}
          onKeyUp={debounceSearch}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { onSearchLogs })(LogForm);