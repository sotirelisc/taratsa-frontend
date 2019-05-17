import React from 'react';
import { connect } from 'react-redux';
import { createUser } from '../../actions';
import UserForm from './UserForm';

class UserCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createUser(formValues);
  }

  render() {
    return (
      <div style={{ marginTop: '1em' }}>
        <h3>Sign Up</h3>
        <UserForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { createUser }
)(UserCreate);