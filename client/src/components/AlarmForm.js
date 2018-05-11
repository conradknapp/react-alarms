import React, { Component } from 'react';

export default class AlarmForm extends Component {
  state = {};

  handleSubmit = () => {
    console.log('submitted');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="search"/>
      </form>
    );
  }
}