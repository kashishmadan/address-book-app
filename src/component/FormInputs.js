import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

export class FormInputs extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  renderInput = ({ label, input, meta }) => {
    const className = "field ${(meta.error && meta.touched) ? 'error' : ''}";
    console.log(meta);
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off"></input>
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = () => {
    console.log("Form submitted!");
  };
  render() {
    console.log(this.props);
    return (
      <div className="ui container">
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form error"
        >
          <Field
            name="firstName"
            component={this.renderInput}
            label="First Name"
          ></Field>
          <Field
            name="lastName"
            component={this.renderInput}
            label="Last Name"
          ></Field>
          <Field name="age" component={this.renderInput} label="Age"></Field>
          <button className="ui button primary">Submit</button>
        </form>
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.firstName) {
    errors.title = "Please enter your first name";
  }
  if (!formValues.lastName) {
    errors.title = "Please enter your last name";
  }
  if (!formValues.age) {
    errors.title = "Please enter your age";
  }
  return errors;
};
export default reduxForm({ form: "ourForm", validate })(FormInputs);
