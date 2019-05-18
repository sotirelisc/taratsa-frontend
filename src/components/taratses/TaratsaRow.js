import React from 'react';
import { 
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Row, Col
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './TaratsaRow.css';

class TaratsaRow extends React.Component {
  render() {
    return (
      <Card>
        <CardImg top width="100%" src={this.props.image} alt="Image" />
        <CardBody>
          <CardTitle tag={Link} to={`/taratses/${this.props.id}`}>
            <Row>
              <Col>
                <h5>{this.props.name}</h5>
              </Col>
              <Col>
                <h5 className="text-right">{this.props.price}€</h5>
              </Col>
            </Row>
          </CardTitle>
          <CardSubtitle>
            <small>Menu by chef {this.props.chef}</small>
          </CardSubtitle>
          <CardText style={{ marginTop: '1em', fontSize: '0.9em' }}>{this.props.description}</CardText>
        </CardBody>
      </Card>
    );
  }
};

export default TaratsaRow;