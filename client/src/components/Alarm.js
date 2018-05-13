import React from 'react';
import { connect } from 'react-redux';

import { onCreateLog } from '../actions';

class Alarm extends React.Component {
  state = {
    activated: false
  };

  handleActivate = id => {
    this.props.onCreateLog(id);
    this.setState(prevState => ({
      activated: !prevState.activated
    }));
  }

  insertIcon = category => {
    if (category === 'window') {
      return './icons/window.svg';
    } else if (category === 'door') {
      return './icons/door.svg';
    } else if (category === 'fence') {
      return './icons/fence.svg';
    }
  }

  render() {
    const { description, id, category } = this.props;
    return (
      <li className="alarm">
        <img
          className="alarm-icon"
          src={this.insertIcon(category)}
          alt={category}
        />
        <h3>{description}</h3>
        <button onClick={() => this.handleActivate(id)}>
          {this.state.activated ? "Activated!" : "Activate"}
        </button>
      </li>
    );
  }
};

export default connect(null, { onCreateLog })(Alarm);