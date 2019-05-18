import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import TaratsaRow from './TaratsaRow';
import {
  CardColumns,
  Spinner,
  FormGroup,
  Input,
  Row,
  Col
} from 'reactstrap';
import { fetchTaratses, selectDate } from '../../actions';

class TaratsaList extends React.Component {
  componentDidMount() {
    this.props.fetchTaratses();
    this.props.selectDate('2019-05-19');
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
  }

  onDateChange = e => {
    this.props.fetchTaratses(e.target.value);
    this.props.selectDate(e.target.value);
  }

  render() {
    if (_.isEmpty(this.props.taratses)) {
      return (
        <Spinner className="text-center" style={{ width: '3rem', height: '3rem' }} type="grow" />
      );
    }
    return (
      <Row style={{ marginTop: '1em' }}>
        <Col md="9">
          <CardColumns>
            {this.renderList()}
          </CardColumns>
        </Col>
        <Col md="3">
          <h4>Choose a Date</h4>
          <FormGroup>
            <Input
              type="date"
              name="date"
              id="exampleDate"
              placeholder="date placeholder"
              value="2019-05-19"
              onChange={e => this.onDateChange(e)}
            />
          </FormGroup>
        </Col>
      </Row>
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
  selectDate
})(TaratsaList);