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

class TaratsaForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <Alert color="danger" style={{ marginTop: '1em' }}>
          {error}
        </Alert>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <FormGroup className={className}>
        <Label>{label}</Label>
        <Input {...input} autoComplete="off" />
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
          name="title"
          label="Enter Title"
          component={this.renderInput}
        />
        <Field
          name="description"
          label="Enter Description"
          component={this.renderInput}
        />
        <Field
          name="location"
          label="Enter Location"
          component={this.renderInput}
        />
        <Button color="info">
          Create Taratsa
        </Button>
      </Form>
    );
  }
}

const validate = ({ title, description, location }) => {
  const errors = {};

  if (!title) {
    errors.title = 'Please enter a title.'
  }

  if (!description) {
    errors.description = 'Please enter a description.'
  }

  if (!location) {
    errors.location = 'Please enter a location.'
  }

  return errors;
};

export default reduxForm({
  form: 'TaratsaForm',
  validate
})(TaratsaForm);