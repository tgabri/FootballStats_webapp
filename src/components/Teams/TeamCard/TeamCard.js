import React, { Component } from 'react';
import { Card, CardTitle, Row, Col, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

import './TeamCard.css';
import { fetchTeam } from '../../../api';

export default class TeamCard extends Component {
  state = {
    team: null,
    isLoading: true,
    error: null
  };

  componentDidMount() {
    this.getTeam();
  }

  getTeam = () => {
    const { teamID } = this.props.match.params;

    fetchTeam(teamID)
      .then(team => this.setState({ team, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  };

  formatPosition = pos => {
    switch (pos) {
      case 'Goalkeeper':
        return 'GK';
      case 'Defender':
        return 'DEF';
      case 'Midfielder':
        return 'MID';
      case 'Attacker':
        return 'ATT';
      default:
        return 'MGR';
    }
  };

  render() {
    const { isLoading, team, error } = this.state;
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Ooops...</p>;

    return (
      <div className='team-container'>
        <Row id='team-row'>
          <Col>
            <Card id='teamcard-title' color='dark' body>
              <CardTitle>
                {team.name} - {team.area.name}
              </CardTitle>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card id='teamcard-title' color='dark' body>
              <CardTitle>Squad</CardTitle>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Table id='teamcard-table' striped>
                <thead>
                  <tr>
                    <th>NAME</th>
                    <th>POS</th>
                    <th>NAT</th>
                  </tr>
                </thead>
                <tbody>
                  {team.squad.map(player => {
                    return (
                      <tr key={player.id}>
                        <th scope='row'>
                          <Link to={`/players/${player.id}`}>
                            {player.name}
                          </Link>
                        </th>
                        <td style={{ width: '26px' }}>
                          {this.formatPosition(player.position)}
                        </td>
                        <td>{player.nationality}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
