import React from 'react';
import { connect } from 'react-redux';
import Sort from './Sort';

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
    if (!LOGS) return <div>Loading</div>;

    return (
      <div className="table">
      {this.displayResultsCount()}
        <div className="table-header">
          <Sort logs={LOGS} sortKey={"DESC"} className="table-header__description">Description</Sort>
          <Sort logs={LOGS} sortKey={"ALERT"}
          className="table-header__alert">From (Alert Device)</Sort>
          <Sort logs={LOGS} sortKey={"DATE"} className="table-header__created-date">Created Date</Sort>
          <Sort logs={LOGS} sortKey={"ID"} className="table-header__id">Id</Sort>
        </div>
      {LOGS.map(log => (
        <div key={log._id} className="table-row">
          <span className="table-row__description">{log.alarmDeviceId.description}</span>
          <span className="table-row__alert">{log.alertDeviceId.description}</span>
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
