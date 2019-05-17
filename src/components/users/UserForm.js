import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  Button,
  Form,
  Label,
  Input,
  FormGroup,
  Alert
} from 'reactstrap';

class UserForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <Alert color="danger" style={{ marginTop: '1em' }}>
          {error}
        </Alert>
      );
    }
  }

  renderInput = ({ input, type, label, meta }) => {
    console.log(input);
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <FormGroup className={className}>
        <Label>{label}</Label>
        <Input {...input} type={type} autoComplete="off" />
        {this.renderError(meta)}
      </FormGroup>
    );
  }

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  }

  render() {
    return (
      <Form onSubmit={this.props.handleSubmit(this.onSubmit)} style={{ marginTop: '1em' }}>
        <Field
          name="email"
          label="Email"
          component={this.renderInput}
        />
        <Field
          name="password"
          label="Password"
          type="password"
          component={this.renderInput}
        />
        <Button color="info">
          Sign Up
        </Button>
      </Form>
    );
  }
}

const validate = ({ email, password }) => {
  const errors = {};

  if (!email) {
    errors.email = 'Please enter an email.'
  }

  if (!password) {
    errors.password = 'Please enter a password.'
  }

  return errors;
};

export default reduxForm({
  form: 'UserForm',
  validate
})(UserForm);