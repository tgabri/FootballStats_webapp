import React, { Component } from 'react';
import { Card, CardTitle, Row, Col, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

import './CompetitionTeams.css';
import { fetchCompetition } from '../../../../api';
import Tab from '../../../../Reuseables/Tab/Tab';

export default class CompetitionTeams extends Component {
  state = {
    competitionTeams: [],
    isLoading: true,
    error: null
  };

  componentDidMount() {
    this.getCompetitionTeams();
  }

  getCompetitionTeams = () => {
    const path = this.props.match.path.split('/');
    const { id } = this.props.match.params;
    fetchCompetition(id, path[path.length - 1])
      .then(data => {
        this.setState({
          competitionTeams: data.teams,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  };

  render() {
    const { isLoading, competitionTeams, error } = this.state;
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Ooops...</p>;

    console.log(competitionTeams);
    return (
      <div className='competitionTeams-container'>
        <Row>
          <Col>
            <Tab id={this.props.match.params.id} />
          </Col>
        </Row>
        <Row id='competitionTeams-row'>
          <Col>
            <Card id='competitionTeams-title' color='dark' body>
              <CardTitle>Teams</CardTitle>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              {competitionTeams.map(team => (
                <Table id='competitionTeams-table' key={team.id} striped>
                  <tbody>
                    <tr>
                      <th>{team.name}</th>
                      <th>
                        <img
                          style={{ width: '30px', height: '30px' }}
                          src={team.crestUrl}
                          alt='logo'
                        />
                      </th>
                      <th>{team.founded}</th>
                    </tr>
                    <tr>
                      <th scope='row'>{team.address}</th>
                      <td>{team.clubColors}</td>
                      <td>{team.venue}</td>
                    </tr>
                  </tbody>
                </Table>
              ))}
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
