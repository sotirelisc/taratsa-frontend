import React from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../actions';
import UserForm from './UserForm';

class UserSignIn extends React.Component {
  onSubmit = formValues => {
    this.props.signIn(formValues);
  }

  render() {
    return (
      <div style={{ marginTop: '1em' }}>
        <h3>Sign In</h3>
        <UserForm
          onSubmit={this.onSubmit}
          buttonLabel="Sign In"
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
  { signIn }
)(UserSignIn);