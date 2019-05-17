import React from 'react';
import { connect } from 'react-redux';
import { createTaratsa } from '../../actions';
import TaratsaForm from './TaratsaForm';

class TaratsaCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createTaratsa(formValues);
  }

  render() {
    return (
      <div style={{ marginTop: '1em' }}>
        <h3>Create a Taratsa</h3>
        <TaratsaForm
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
  { createTaratsa }
)(TaratsaCreate);