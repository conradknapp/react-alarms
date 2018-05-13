import React from 'react';
import { connect } from 'react-redux';
import { onFetchAlarms } from '../actions';

import Alarm from './Alarm';

class AlarmList extends React.Component {
  componentDidMount() {
    this.props.onFetchAlarms();
  }

  render() {
    const { alarms } = this.props;
    if (!alarms) return <div>Loading</div>;

    return (
      <ul>
        {alarms.map(alarm =>
          <Alarm
            id={alarm._id}
            key={alarm._id}
            description={alarm.description}
            category={alarm.category}
          />)}
      </ul>
    );
  }
};

const mapStateToProps = ({ alarms }) => ({ alarms });

export default connect(mapStateToProps, { onFetchAlarms })(AlarmList);