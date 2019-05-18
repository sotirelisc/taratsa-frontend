import React from 'react';
import { connect } from 'react-redux';
import { 
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
  Spinner, Row, Col, CardHeader
} from 'reactstrap';
import {
  fetchTaratsa
} from '../../actions';
import './TaratsaRow.css';

class TaratsaShow extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.fetchTaratsa(id);
  }

  render() {
    if (!this.props.taratsa) {
      return (
        <Spinner style={{ width: '3em', height: '3em' }} type="grow" />
      );
    }

    const { name, chef, price, description, menu, owner } = this.props.taratsa;

    return (
      <React.Fragment>
        <Row style={{ marginTop: '1em' }}>
          <Col md="8">
            <Card>
              <CardImg top width="100%" src="https://i.pinimg.com/originals/8a/12/91/8a12919c54e5d860df0e30bf7743d99d.jpg" alt="Image" />
              <CardBody>
                <CardTitle>
                  <Row>
                    <Col>
                      <h5>{name}</h5>
                    </Col>
                    <Col>
                      <h5 className="text-right">{price}€</h5>
                    </Col>
                  </Row>
                </CardTitle>
                <CardSubtitle>
                  <small>Menu by chef {chef.firstname + ' ' + chef.lastname}</small>
                </CardSubtitle>
                <CardText style={{ marginTop: '1em', fontSize: '0.9em' }}>{description}</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md="4" className="text-center">
            <Card>
              <CardHeader><strong>{price}€</strong> <small>per dinner</small></CardHeader>
              <CardBody>
                <CardSubtitle><h5>18 May 2019 - 20:00</h5></CardSubtitle>
                <CardText style={{ marginTop: '1em', fontSize: '0.9em' }}>
                  Guests: 2<br />
                  Total: {price}€
                </CardText>
                <Button className="btn-block" style={{ marginTop: '2em' }} color="info">Book</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop: '1em' }}>
          <Col md="8">
            <h3>Menu</h3>
            {menu.menu}
          </Col>
        </Row>
        <Row style={{ marginTop: '2em' }}>
          <Col md="8">
            <h4>Host</h4>
            <p style={{ fontSize: '0.8em' }}>
              Hosted by {owner.firstname + ' ' + owner.lastname}
            </p>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    taratsa: state.taratses[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, {
  fetchTaratsa
})(TaratsaShow);