import React from 'react';
import { connect } from 'react-redux';

import { onCreateLog } from '../actions';

class Alarm extends React.Component {
  state = {
    activated: false
  };

  componentDidMount() {
    const booleanId = localStorage.getItem(this.props.id);
    const activated = JSON.parse(booleanId);
    this.setState({ activated });
  }

  handleActivate = id => {
    this.props.onCreateLog(id);
    this.setState(prevState => ({
      activated: !prevState.activated
    }), () => {
      localStorage.setItem(id, JSON.stringify(this.state.activated));
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
    }
  }

  render() {
    const { description, id, category } = this.props;

    return (
      <li className="alarm">
        <img
          className={this.state.activated ? 'alarm-icon__activated' : 'alarm-icon'}
          src={this.insertIcon(category)}
          alt={category}
        />
        <h3>{description}</h3>
        <div>
          {(category === "door" || "window") && <button onClick={() => this.handleActivate(id)}>
            <img className="alarm-button__icon" src="./icons/fire.svg" alt=""/>
          </button>}
          {(category !== "pipes") && <button onClick={() => this.handleActivate(id)}>
            <img className="alarm-button__icon" src="./icons/thief.svg" alt=""/>
          </button>}
          {category === "pipes" && <button onClick={() => this.handleActivate(id)}>
            <img className="alarm-button__icon" src="./icons/leak.svg" alt=""/>
          </button>}
        </div>
      </li>
    );
  }
};

export default connect(null, { onCreateLog })(Alarm);