import React, { useState } from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

import './NavIsland.css';

export default function NavIsland(props) {
  const [topics] = useState(['matches', 'competitions', 'teams']);
  console.log(topics);
  return (
    <div className='navisland-container'>
      {topics.map(topic => {
        return (
          <Link key={topic} to={`/${topic}`}>
            <Card color='dark'>
              <CardBody>
                <CardTitle>{topic.toUpperCase()}</CardTitle>
              </CardBody>
              <CardImg top width='100%' src={`/img/${topic}.jpg`} alt={topic} />
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
