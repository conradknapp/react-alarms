import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from "redux-form";

import { onCreateAlarm } from '../actions';

class AlarmForm extends React.Component {
  state = {};

  myInput = ({ input, meta: { touched, error }}) => {
    const inputClass = touched && error ? "alarm-form__invalid" : "alarm-form__valid";
    return (
      <React.Fragment>
        <h2 className="alarm-form__title">Create a Home Alarm</h2>
        <input
          className={inputClass}
          type="text"
          placeholder="Add Description"
          {...input}
        />
        <button
          disabled={this.state.validationErrors}
          type="submit"
        >
          Add Alarm
        </button>
        {touched ? error && <p className="alarm-form__error-message">{error}</p> : ""}
        <div
          onChange={this.handleInputChange}
          className="alarm-form__radio-buttons"
        >
          <h3 className="alarm-form__radio-buttons__title">Select What To Monitor</h3>
          <input type="radio" name="category" value="window" /> Window
          <input type="radio" name="category" value="door" /> Door
          <input type="radio" name="category" value="fence" /> Fence
          <input type="radio" name="category" value="pipes" /> Pipes
          <input type="radio" name="category" value="stove" /> Stove
        </div>
      </React.Fragment>
    )
  }

  handleInputChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleFormSubmit = evt => {
    evt.persist();
    evt.preventDefault();
    const { description, category } = this.state;
    this.props.onCreateAlarm(description, category);
    evt.target.reset();
  }

  render() {
    return (
      <form
        onSubmit={this.handleFormSubmit}
        className="alarm-form"
      >
        <Field
          onChange={this.handleInputChange}
          name="description"
          component={this.myInput}
        />
      </form>
    );
  }
}

const validate = values => {
  const errors = {};
  if (!values.description) {
    errors.description = "Enter an alarm description";
  }
  return errors;
};

export default reduxForm({
  validate,
  form: "AlarmDeviceForm"
})(connect(null, { onCreateAlarm })(AlarmForm));