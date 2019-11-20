import React, { Component } from 'react';
import { Card, CardTitle, Row, Col, Table } from 'reactstrap';

import './Standings.css';
import { fetchCompetition } from '../../../../api';
import Tab from '../../../../Reuseables/Tab/Tab';

export default class Standings extends Component {
  state = {
    standings: [],
    isLoading: true,
    error: null
  };

  componentDidMount() {
    this.getStandings();
  }

  getStandings = () => {
    const path = this.props.match.path.split('/');
    const { id } = this.props.match.params;
    fetchCompetition(id, path[path.length - 1])
      .then(data => {
        this.setState({ standings: data.standings, isLoading: false });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  };

  render() {
    const { isLoading, standings, error } = this.state;
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Ooops...</p>;
    console.log(standings);
    return (
      <div className='standings-container'>
        <Row>
          <Col>
            <Tab id={this.props.match.params.id} />
          </Col>
        </Row>
        <Row id='standings-row'>
          <Col>
            <Card id='standings-title' color='dark' body>
              <CardTitle>STANDINGS</CardTitle>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Table id='standings-table' striped>
                <thead>
                  <tr>
                    <th>P</th>
                    <th>TEAM</th>
                    <th>GP</th>
                    <th>W</th>
                    <th>D</th>
                    <th>L</th>
                    <th>GF</th>
                    <th>GA</th>
                    <th>P</th>
                  </tr>
                </thead>
                <tbody>
                  {standings[0].table.map(team => (
                    <tr key={team.position}>
                      <th scope='row'>{team.position}.</th>
                      <td>{team.team.name}</td>
                      <td>{team.playedGames}</td>
                      <td>{team.won}</td>
                      <td>{team.draw}</td>
                      <td>{team.lost}</td>
                      <td>{team.goalsFor}</td>
                      <td>{team.goalsAgainst}</td>
                      <td>{team.points}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
