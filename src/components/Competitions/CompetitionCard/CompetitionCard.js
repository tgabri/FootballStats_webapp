import React from 'react';
import { Row, Col } from 'reactstrap';

import './CompetitionCard.css';
import Tab from '../../../Reuseables/Tab/Tab';

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
