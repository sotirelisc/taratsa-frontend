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

  renderInput = ({ input, type, label, meta }) => {
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

  renderChefList() {
    if (this.props.chefs) {
      return (
        <FormGroup>
          <Label>Choose Chef</Label>
          <Input tag={Field} component="select" name="chef">
            <option></option>
            {this.props.chefs.map(chef => {
              return (
                <option value={chef.id} key={chef.id}>
                  {chef.firstname + ' ' + chef.lastname}
                </option>
              );
            })}
          </Input>
        </FormGroup>
      );
    }
  }

  render() {
    return (
      <Form onSubmit={this.props.handleSubmit(this.onSubmit)} style={{ marginTop: '1em' }}>
        <Field
          name="name"
          label="Enter Title"
          component={this.renderInput}
        />
        <Field
          name="description"
          label="Enter Description"
          component={this.renderInput}
        />
        <Field
          name="price"
          label="Enter Price"
          component={this.renderInput}
          type="number"
        />
        {this.renderChefList()}
        <Button color="info">
          Create Taratsa
        </Button>
      </Form>
    );
  }
}

const validate = ({ title, description, price }) => {
  const errors = {};

  if (!title) {
    errors.title = 'Please enter a title.'
  }

  if (!description) {
    errors.description = 'Please enter a description.'
  }

  if (!price) {
    errors.price = 'Please enter a price.'
  }

  return errors;
};

export default reduxForm({
  form: 'TaratsaForm',
  validate
})(TaratsaForm);