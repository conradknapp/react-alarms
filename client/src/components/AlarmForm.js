import React, { Component } from 'react';
import { connect } from 'react-redux';

import { onCreateAlarm } from '../actions';

class AlarmForm extends Component {
  state = { inputValue: "" };

  handleInputChange = evt => {
    const inputValue = evt.target.value;
    this.setState({ inputValue });
  }

  handleSubmit = evt => {
    evt.persist();
    evt.preventDefault();
    const { inputValue } = this.state;
    this.props.onCreateAlarm(inputValue);
    evt.target.reset();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="description"
          placeholder="Add Description"
          onChange={this.handleInputChange}
        />
        <button type="submit">Add Alarm</button>
      </form>
    );
  }
}

export default connect(null, { onCreateAlarm })(AlarmForm);