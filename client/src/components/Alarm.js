import React from 'react';
import { connect } from 'react-redux';

import AlertButton from './AlertButton';
import { onCreateLog, onFetchAlerts } from '../actions';

class Alarm extends React.Component {
  state = {
    activated: false
  };

  componentDidMount() {
    this.props.onFetchAlerts();
    const toggledStatus = localStorage.getItem(this.props.id);
    const activated = JSON.parse(toggledStatus);
    this.setState({ activated });
  }

  handleActivateAlarm = (alarmId, alertId) => {
    if (!this.state.activated) {
      this.props.onCreateLog(alarmId, alertId);
    }
    this.setState(prevState => ({
      activated: !prevState.activated
    }), () => {
      localStorage.setItem(alarmId, JSON.stringify(this.state.activated));
    });
  }

  insertIcon = category => {
    if (category === 'window') {
      return './icons/window.svg';
    } else if (category === 'door') {
      return './icons/door.svg';
    } else if (category === 'fence') {
      return './icons/fence.svg';
    } else if (category === 'pipes') {
      return './icons/pipes.svg';
    } else if (category === 'stove') {
      return './icons/stove.svg';
    }
  }

  render() {
    const { description, id, category, alerts } = this.props;

    return (
      <li className="alarm">
        <img
          className={this.state.activated ? 'alarm-icon__activated' : 'alarm-icon'}
          src={this.insertIcon(category)}
          alt={category}
        />
        <h3>{description}</h3>
        <div>
          {alerts.map(alert =>
            <AlertButton
              key={alert._id}
              description={alert.description}
              category={category}
              handleActivateAlarm={() => this.handleActivateAlarm(id, alert._id)}
            />
          )}
          {/* {(category === "door" || "window") && <button onClick={() => this.handleActivateAlarm(id)}>
            <img className="alarm-button__icon" src="./icons/fire.svg" alt="" />
          </button>}
          {(category !== "pipes") && <button onClick={() => this.handleActivateAlarm(id)}>
            <img className="alarm-button__icon" src="./icons/thief.svg" alt="" />
          </button>}
          {category === "pipes" && <button onClick={() => this.handleActivateAlarm(id)}>
            <img className="alarm-button__icon" src="./icons/leak.svg" alt="" />
          </button>} */}
        </div>
      </li>
    );
  }
};

const mapStateToProps = state => state;

export default connect(mapStateToProps, { onCreateLog, onFetchAlerts })(Alarm);