import React, { Component } from 'react';

export default class LogForm extends Component {
  state = {};

  handleSubmit = () => {
    console.log('submitted');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"/>
        <button type="submit">Submit</button>
      </form>
    );
  }
}