import React, { Component } from 'react';
import { Card, CardTitle, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';

import './Competitions.css';
import { fetchCompetitions } from '../../api.js';

export default class Competitions extends Component {
  state = {
    competitions: [],
    isLoading: true,
    error: null
  };

  componentDidMount() {
    this.getCompetitions();
  }

  getCompetitions = () => {
    fetchCompetitions()
      .then(data => {
        this.setState({ competitions: data.competitions, isLoading: false });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  };

  render() {
    const { isLoading, competitions, error } = this.state;
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Ooops...</p>;
    let filteredCompetitions = [];
    return (
      <div className='competitions-container'>
        {competitions.map(comp => (
          <div className='competitions-wrapper' key={comp.id}>
            {' '}
            <CardTitle>
              <Link to={`/areas/${comp.area.id}`}>
                {!filteredCompetitions.includes(comp.area.name) &&
                  comp.area.name}
              </Link>
            </CardTitle>
            <Card
              color='dark'
              style={{
                width: '100%'
              }}
              body
            >
              <Link to={`/competitions/${comp.id}`}>
                <CardSubtitle> {comp.name}</CardSubtitle>
              </Link>
            </Card>
            {!filteredCompetitions.push(comp.area.name)}
          </div>
        ))}
      </div>
    );
  }
}
