import React from 'react';
import { connect } from 'react-redux';
import TaratsaRow from './TaratsaRow';
import {
  CardColumns
} from 'reactstrap';
import { fetchTaratses } from '../../actions';

class TaratsaList extends React.Component {
  componentDidMount() {
    this.props.fetchTaratses();
  }

  renderList() {
    if (this.props.taratses) {
      return this.props.taratses.map(taratsa => {
        return (
          <TaratsaRow
            id={taratsa.id}
            key={taratsa.id}
            name={taratsa.name}
            description={taratsa.description}
            chef={taratsa.chef.firstname + ' ' + taratsa.chef.lastname}
            owner={taratsa.owner.firstname + ' ' + taratsa.owner.lastname}
            price={taratsa.price}
            long={taratsa.long}
            lat={taratsa.lat}
            image="https://i.pinimg.com/originals/8a/12/91/8a12919c54e5d860df0e30bf7743d99d.jpg"
          />
        );
      });
    }
    return 'Loading';
  }

  render() {
    return (
      <CardColumns style={{ marginTop: '1em' }}>
        {this.renderList()}
      </CardColumns>
    );
  }
}

const mapStateToProps = state => {
  return {
    taratses: Object.values(state.taratses),
  };
};

export default connect(mapStateToProps, {
  fetchTaratses,
})(TaratsaList);