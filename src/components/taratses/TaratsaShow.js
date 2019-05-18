import React from 'react';
import { connect } from 'react-redux';
import { 
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
  Spinner, Row, Col, CardHeader
} from 'reactstrap';
import {
  fetchTaratsa,
  bookTaratsa
} from '../../actions';
import './TaratsaRow.css';
import TaratsaMap from './TaratsaMap';

class TaratsaShow extends React.Component {
  state = {
    stage: 'booking'
  };

  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.fetchTaratsa(id);
  }

  bookTaratsa = () => {
    const { id } = this.props.match.params;

    this.props.bookTaratsa(this.props.userToken, id, this.props.selectedDate);
  }

  renderCard() {
    if (this.state.stage === 'booking') {
      return (
        <Card>
          <CardHeader><strong>{this.props.taratsa.price}€</strong> <small>per dinner</small></CardHeader>
          <CardBody>
            <CardSubtitle><h5>{this.props.selectedDate}, 20:00</h5></CardSubtitle>
            <CardText style={{ marginTop: '1em', fontSize: '0.9em' }}>
              Guests: 2<br />
              Total: {this.props.taratsa.price}€
            </CardText>
            <Button
              onClick={() => this.setState({ stage: 'payment' })}
              className="btn-block"
              style={{ marginTop: '2em' }}
              color="info"
            >
              Book
            </Button>
            <small style={{ marginTop: '2em' }}>You won’t be charged yet</small>
          </CardBody>
        </Card>
      );
    }
    return (
      <Card>
        <CardHeader><strong>Pay Now</strong></CardHeader>
        <CardBody>
          <CardSubtitle><h5>{this.props.selectedDate}, 20:00</h5></CardSubtitle>
          <CardText style={{ marginTop: '1em', fontSize: '0.9em' }}>
            Guests: 2<br />
            Total: {this.props.taratsa.price}€
          </CardText>
          <Button
            onClick={() => this.bookTaratsa()}
            className="btn-block"
            style={{ marginTop: '2em' }}
            color="info"
          >
            Pay with Pay
          </Button>
        </CardBody>
      </Card>
    );
  }

  render() {
    if (!this.props.taratsa) {
      return (
        <Spinner style={{ width: '3em', height: '3em' }} type="grow" />
      );
    }

    const { name, chef, price, description, menu, owner, lat, long } = this.props.taratsa;

    return (
      <React.Fragment>
        <Row style={{ marginTop: '1em' }}>
          <Col md="7">
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
          <Col md="5" className="text-center">
            {this.renderCard()}
          </Col>
        </Row>
        <Row style={{ marginTop: '1em' }}>
          <Col md="7">
            <h3>Menu</h3>
            {menu.menu}
          </Col>
        </Row>
        <Row style={{ marginTop: '2em' }}>
          <Col md="7">
            <h4>Host</h4>
            <p style={{ fontSize: '0.8em' }}>
              Hosted by {owner.firstname + ' ' + owner.lastname}
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: '1em' }}>
          <Col md="7">
            <h4>Location</h4>
            <TaratsaMap
              lat={parseFloat(long)}
              long={parseFloat(lat)}
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    taratsa: state.taratses[ownProps.match.params.id],
    selectedDate: state.date.selectedDate,
    userToken: state.auth.userToken
  };
};

export default connect(mapStateToProps, {
  fetchTaratsa,
  bookTaratsa
})(TaratsaShow);