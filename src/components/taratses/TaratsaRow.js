import React from 'react';
import { 
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const TaratsaRow = ({ id, title, chef, description, image }) => {
  return (
    <Card>
      <CardImg top width="100%" src={image} alt="Image" />
      <CardBody>
        <CardTitle tag={Link} to={`/taratses/${id}`}>
          <strong>{title}</strong>
        </CardTitle>
        <CardSubtitle style={{ marginTop: '1em' }}>{chef}</CardSubtitle>
        <CardText style={{ marginTop: '0.5em' }}>{description}</CardText>
        <Button color="info">Reserve It</Button>
      </CardBody>
    </Card>
  );
};

export default TaratsaRow;