import React from 'react';
import { 
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
} from 'reactstrap';

const TaratsaShow = ({ title, chef, description, image }) => {
  return (
    <Card>
      <CardImg top width="100%" src={image} alt="Image" />
      <CardBody>
        <CardTitle><strong>{title}</strong></CardTitle>
        <CardSubtitle>{chef}</CardSubtitle>
        <CardText>{description}</CardText>
        <Button color="info">Reserve It</Button>
      </CardBody>
    </Card>
  );
};

export default TaratsaShow;