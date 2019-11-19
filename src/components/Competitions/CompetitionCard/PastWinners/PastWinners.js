import React, { Component } from 'react';
import { Card, CardTitle, Row, Col, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

import './PastWinners.css';
import { fetchCompetition } from '../../../../api';
import Tab from '../../../../Reuseables/Tab/Tab';

export default class CompetitionCard extends Component {
  state = {
    competition: null,
    isLoading: true,
    error: null
  };

  componentDidMount() {
    this.getCompetition();
  }

  getCompetition = () => {
    console.log(this.props);
    const { id } = this.props.match.params;

    fetchCompetition(id)
      .then(competition => this.setState({ competition, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  };

  render() {
    const { isLoading, competition, error } = this.state;
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Ooops...</p>;
    console.log(competition);
    return (
      <div className='competition-container'>
        <Row>
          <Col>
            <Tab />
          </Col>
        </Row>
        <Row id='competition-row'>
          <Col>
            <Card id='compcard-title' color='dark' body>
              <CardTitle>
                <Link to={`/competitions/${competition.id}`}>
                  {competition.name}
                </Link>{' '}
                -{' '}
                <Link to={`/areas/${competition.area.id}`}>
                  {competition.area.name}
                </Link>
              </CardTitle>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card id='compcard-title' color='dark' body>
              <CardTitle>Past Winners</CardTitle>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Table id='compcard-table' striped>
                <thead>
                  <tr>
                    <th>SEASON</th>
                    <th></th>
                    <th>TEAM</th>
                    <th>GAMES</th>
                  </tr>
                </thead>
                <tbody>
                  {competition.seasons.map(season => {
                    return (
                      <tr key={season.id}>
                        <th scope='row' style={{ fontSize: '12px' }}>
                          {season.startDate.slice(0, 4)}/{' '}
                          {season.endDate.slice(2, 4)}
                        </th>
                        <td style={{ width: '26px' }}>
                          <img
                            style={{ width: '26px' }}
                            src={
                              !season.winner || !season.winner.crestUrl
                                ? '/img/ball.png'
                                : season.winner.crestUrl
                            }
                            alt='NA'
                          />
                        </td>
                        <td>
                          {season.winner ? (
                            <Link to={`/teams/${season.winner.id}`}>
                              {season.winner.name}{' '}
                            </Link>
                          ) : (
                            'Not Available'
                          )}
                        </td>
                        <td style={{ width: '26px' }}>
                          {!season.currentMatchday
                            ? '-'
                            : season.currentMatchday}
                        </td>
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
