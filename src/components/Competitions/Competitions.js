import React, { Component } from 'react';
import { Card, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
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
    return (
      <div className='competitions-container'>
        {competitions.map(
          comp => (
            console.log(comp),
            (
              <div className='competitions-wrapper' key={comp.id}>
                <Link to={`/competitions/${comp.id}`}>
                  {' '}
                  <Card color='dark' body>
                    <CardTitle>
                      {comp.area.name} - {comp.name}
                    </CardTitle>
                  </Card>
                </Link>
              </div>
            )
          )
        )}
      </div>
    );
  }
}
