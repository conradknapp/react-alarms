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

  render() {
    const { description, id } = this.props;
    return (
      <li>
        <h3>{description}</h3>
        <button onClick={() => this.handleActivate(id)}>{this.state.activated ? "Activated!" : "Activate"}</button>
      </li>
    );
  }
};

export default connect(null, { onCreateLog })(Alarm);