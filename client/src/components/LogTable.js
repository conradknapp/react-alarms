import React from 'react';
import { connect } from 'react-redux';
import Sort from './Sort';

import { onFetchLogs, onSortLogs } from '../actions';
import { formatDate } from '../helpers';

class LogTable extends React.Component {
  state = {
    DESC: list => this.props.onSortLogs(list, "alarmDeviceId.description"),
    ALERT: list => this.props.onSortLogs(list, "alertDeviceId.description"),
    DATE: list => this.props.onSortLogs(list, "createdDate"),
    ID: list => this.props.onSortLogs(list, "_id")
  };

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

  onSort = (sortKey, logs) => this.state[sortKey](logs);

  render() {
    const { logs, filteredLogs } = this.props;
    const LOGS = filteredLogs.length ? filteredLogs : logs;
    if (!LOGS) return <div>Loading</div>;

    return (
      <div className="table">
      {this.displayResultsCount()}
        <div className="table-header">
          <Sort logs={LOGS} sortKey={"DESC"} className="table-header__description" onSort={this.onSort}>Alarm Name</Sort>
          <Sort logs={LOGS} sortKey={"ALERT"}
          className="table-header__alert" onSort={this.onSort}>Alert Device Triggered</Sort>
          <Sort logs={LOGS} sortKey={"DATE"} className="table-header__created-date" onSort={this.onSort}>Created Date</Sort>
          <Sort logs={LOGS} sortKey={"ID"} className="table-header__id" onSort={this.onSort}>Alarm Id</Sort>
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

export default connect(mapStateToProps, { onFetchLogs, onSortLogs })(LogTable);
