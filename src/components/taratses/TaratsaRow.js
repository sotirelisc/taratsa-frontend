import React from 'react';
import { 
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './TaratsaRow.css';

const TaratsaRow = ({ id, name, chef, description, image }) => {
  return (
    <Card>
      <CardImg top width="100%" src={image} alt="Image" />
      <CardBody>
        <CardTitle tag={Link} to={`/taratses/${id}`}>
          <h5>{name}</h5>
        </CardTitle>
        <CardSubtitle>
          <small>Menu by chef {chef}</small>
        </CardSubtitle>
        <CardText style={{ marginTop: '1em' }}>{description}</CardText>
      </CardBody>
    </Card>
  );
};

export default TaratsaRow;