import React from 'react';
import TaratsaRow from './TaratsaRow';
import {
  CardColumns
} from 'reactstrap';

class TaratsaList extends React.Component {
  render() {
    return (
      <CardColumns style={{ marginTop: '1em' }}>
        <TaratsaRow
          title="Aegean Taratsa"
          chef="Labros Vakiaros"
          description="The best view in Samos island."
          image="https://i.pinimg.com/originals/8a/12/91/8a12919c54e5d860df0e30bf7743d99d.jpg"
        />
        <TaratsaRow
          title="Aegean Taratsa"
          chef="Labros Vakiaros"
          description="The best view in Samos island."
          image="https://i.pinimg.com/originals/8a/12/91/8a12919c54e5d860df0e30bf7743d99d.jpg"
        />
        <TaratsaRow
          title="Aegean Taratsa"
          chef="Labros Vakiaros"
          description="The best view in Samos island."
          image="https://i.pinimg.com/originals/8a/12/91/8a12919c54e5d860df0e30bf7743d99d.jpg"
        />
        <TaratsaRow
          title="Aegean Taratsa"
          chef="Labros Vakiaros"
          description="The best view in Samos island."
          image="https://i.pinimg.com/originals/8a/12/91/8a12919c54e5d860df0e30bf7743d99d.jpg"
        />
        <TaratsaRow
          title="Aegean Taratsa"
          chef="Labros Vakiaros"
          description="The best view in Samos island."
          image="https://i.pinimg.com/originals/8a/12/91/8a12919c54e5d860df0e30bf7743d99d.jpg"
        />
      </CardColumns>
    );
  }
}

export default TaratsaList;