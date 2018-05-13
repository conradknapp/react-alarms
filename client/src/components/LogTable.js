import React from 'react';
import { connect } from 'react-redux';

import { onFetchLogs } from '../actions';
import { formatDate } from '../helpers';

class LogTable extends React.Component {
  componentDidMount() {
    this.props.onFetchLogs();
  }

  displayResultsCount = () => {
    const { filteredLogs, searchTerm } = this.props;
    // Check that we have matches and for user input
    const output =
      filteredLogs.length && searchTerm.length ?
        <h3 className="table-header__result-count">
          {filteredLogs.length} results matching "{searchTerm}"
        </h3>
        : null;
    return output;
  }

  render() {
    const { logs, filteredLogs } = this.props;
    const LOGS = filteredLogs.length ? filteredLogs : logs;
    if (!logs) return <div>Loading</div>;

    return (
      <div className="table">
      {this.displayResultsCount()}
        <div className="table-header">
          <span className="table-header__description">Description</span>
          <span className="table-header__created-date">Created Date</span>
          <span className="table-header__id">Id</span>
        </div>
      {LOGS.map(log => (
        <div key={log._id} className="table-row">
          <span className="table-row__description">{log.alarmDeviceId.description}</span>
          <span className="table-row__created-date">{formatDate(log.createdDate)}</span>
          <span className="table-row__id">{log._id}</span>
        </div>
      ))}
      </div>
    );
  }
};

const mapStateToProps = state => state;

export default connect(mapStateToProps, { onFetchLogs })(LogTable);
