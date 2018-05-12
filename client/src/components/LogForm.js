import React, { Component } from 'react';

export default class LogForm extends Component {
  state = {};

  handleSubmit = evt => {
    evt.preventDefault();
    console.log('submitted');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="search"
          placeholder="Search Alarm Logs"
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}