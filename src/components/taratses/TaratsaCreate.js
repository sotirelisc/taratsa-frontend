import React from 'react';
import { connect } from 'react-redux';
import { createTaratsa, fetchChefs } from '../../actions';
import TaratsaForm from './TaratsaForm';

class TaratsaCreate extends React.Component {
  componentDidMount() {
    this.props.fetchChefs();
  }

  onSubmit = formValues => {
    this.props.createTaratsa(formValues);
  }

  render() {
    return (
      <div style={{ marginTop: '1em' }}>
        <h3>Create a Taratsa</h3>
        <TaratsaForm
          onSubmit={this.onSubmit}
          chefs={this.props.chefs}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    chefs: Object.values(state.chefs),
  };
};

export default connect(mapStateToProps, {
  createTaratsa,
  fetchChefs
})(TaratsaCreate);