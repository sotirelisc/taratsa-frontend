import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../actions';

class UserSignOut extends React.Component {
  componentDidMount() {
    this.props.signOut();
  }

  render() {
    return (
      <div style={{ marginTop: '1em' }}>
        <h3>Signing Out</h3>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { signOut }
)(UserSignOut);