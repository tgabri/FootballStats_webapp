import React from 'react';
import { Row, Col } from 'reactstrap';

import './CompetitionCard.css';
import Tab from '../../../Reuseables/Tab/Tab';
import Standings from './Standings/Standings';

export default function CompetitionCard(props) {
  return (
    <div className='competition-container'>
      <Row>
        <Col>
          <Tab id={props.match.params.id} />
        </Col>
      </Row>
    </div>
  );
}
