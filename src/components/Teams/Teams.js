import React, { Component } from 'react';
import { Card, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

import './Teams.css';
import { fetchTeams } from '../../api';

export default class Teams extends Component {
  state = {
    teams: [],
    isLoading: true,
    error: null
  };

  componentDidMount() {
    this.getTeams();
  }

  getTeams = () => {
    fetchTeams()
      .then(data => {
        this.setState({ teams: data.teams, isLoading: false });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  };

  render() {
    const { isLoading, teams, error } = this.state;
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Ooops...</p>;
    return (
      <div className='teams-container'>
        <h3>Teams</h3>
        {teams.map(team => (
          <div className='teams-wrapper' key={team.id}>
            <Link to={`/teams/${team.id}`}>
              {' '}
              <Card
                color='dark'
                style={{
                  width: '100%'
                }}
                body
              >
                <CardTitle>
                  {team.name} ({team.area.name})
                </CardTitle>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}
