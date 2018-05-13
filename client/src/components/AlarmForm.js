import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from "redux-form";

import { onCreateAlarm } from '../actions';

class AlarmForm extends React.Component {
  state = {
    inputValue: ""
  };

  myInput = ({ input, meta: { touched, error }}) => {
    const inputClass = touched && error ? "invalid" : "valid";
    return (
      <React.Fragment>
      <input
        className={inputClass}
        type="text"
        onChange={this.handleInputChange}
        {...input}
      />
      <button
        disabled={this.state.validationErrors}
        type="submit"
      >
        Add Alarm
      </button>
      {touched ? error && <p>{error}</p> : ""}
      </React.Fragment>
    )
  }

  handleInputChange = evt => {
    const inputValue = evt.target.value;
    this.setState({ inputValue });
  }

  onFormSubmit = evt => {
    evt.persist();
    evt.preventDefault();
    const { inputValue } = this.state;
    this.props.onCreateAlarm(inputValue);
    evt.target.reset();
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
        <Field
          name="description"
          placeholder="Add Description"
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