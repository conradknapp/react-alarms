import React from 'react';
import { connect } from 'react-redux';

import { onFetchLogs } from '../actions';

class LogTable extends React.Component {
  componentDidMount() {
    this.props.onFetchLogs();
  }

  render() {
    const { logs } = this.props;
    if (!logs) return <div>Loading</div>;
    console.log(logs);
    return (
      <div className="table">
        <div className="table-header">
          <span style={{ width: "30%" }}>Description</span>
          <span style={{ width: "20%" }}>Created Date</span>
          <span style={{ width: "20%" }}>Id</span>
        </div>
      {logs.map(log => (
        <div key={log._id} className="table-row">
          <span style={{ width: "30%" }}>{log.alarmDeviceId.description}</span>
          <span style={{ width: "20%" }}>{log.createdDate}</span>
          <span style={{ width: "20%" }}>{log._id}</span>
        </div>
      ))}
      </div>
    );
  }
};

const mapStateToProps = ({ logs }) => ({ logs });

export default connect(mapStateToProps, { onFetchLogs })(LogTable);
