import React from 'react';
import { connect } from 'react-redux';
import debounce from "lodash.debounce";

import { onSearchLogs } from '../actions';

class LogForm extends React.Component {
  render() {
    const { onSearchLogs, logs, handleInputChange, searchTerm } = this.props;
    const debounceSearch = debounce(() => onSearchLogs(searchTerm, logs), 750);

    return (
      <div className="log-form__container">
        <h2 className="log-form__title">Browse Past Alerts</h2>
        <form className="log-form">
          <input
            type="search"
            placeholder="Search Logs"
            onChange={handleInputChange}
            onKeyUp={debounceSearch}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { onSearchLogs })(LogForm);