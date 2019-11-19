import React, { Component } from 'react';
import {
  Card,
  CardTitle,
  Row,
  Col,
  Table,
  CardSubtitle,
  CardText
} from 'reactstrap';
import { Link } from 'react-router-dom';

import './MatchCard.css';
import { fetchMatch } from '../../../api';

export default class MatchCard extends Component {
  state = {
    match: null,
    isLoading: true,
    error: null
  };

  componentDidMount() {
    this.getMatch();
  }

  getMatch = () => {
    const { matchID } = this.props.match.params;

    fetchMatch(matchID)
      .then(match => this.setState({ match, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  };
  render() {
    const { isLoading, match, error } = this.state;
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Ooops...</p>;
    console.log(match);
    return (
      <div className='match-container'>
        <Row id='match-row'>
          <Col>
            <Card id='matchcard-title' color='dark' body>
              <CardTitle>
                <Link to={`/teams/${match.match.homeTeam.id}`}>
                  {match.match.homeTeam.name}
                </Link>{' '}
                -{' '}
                <Link to={`/teams/${match.match.awayTeam.id}`}>
                  {match.match.awayTeam.name}
                </Link>
              </CardTitle>
              <CardSubtitle>
                {match.match.score.extraTime.homeTeam &&
                  match.match.score.extraTime.homeTeam -
                    match.match.score.extraTime.awayTeam +
                    'ET'}
                {match.match.score.fullTime.homeTeam} -{' '}
                {match.match.score.fullTime.awayTeam}
              </CardSubtitle>
              <CardText>
                ({match.match.score.halfTime.homeTeam} -{' '}
                {match.match.score.halfTime.awayTeam})
                {match.match.score.penalties.homeTeam &&
                  match.match.score.penalties.homeTeam -
                    match.match.score.penalties.awayTeam +
                    'P'}
              </CardText>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Table id='matchcard-table' striped>
                {/* <thead>
                  <tr>
                    <th>NAME</th>
                    <th>POS</th>
                    <th>NAT</th>
                  </tr>
                </thead>
                <tbody>
                  {match.squad.map(player => {
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
                </tbody> */}
              </Table>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
