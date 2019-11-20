import React, { Component } from 'react';
import { Card, CardTitle, Row, Col, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

import './Scorers.css';
import { fetchCompetition } from '../../../../api';
import Tab from '../../../../Reuseables/Tab/Tab';

export default class Scorers extends Component {
  state = {
    scorers: [],
    isLoading: true,
    error: null
  };

  componentDidMount() {
    this.getScorers();
  }

  getScorers = () => {
    const path = this.props.match.path.split('/');
    const { id } = this.props.match.params;
    fetchCompetition(id, path[path.length - 1])
      .then(data => {
        this.setState({ scorers: data.scorers, isLoading: false });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  };

  render() {
    const { isLoading, scorers, error } = this.state;
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Ooops...</p>;

    console.log(scorers);
    return (
      <div className='scorers-container'>
        <Row>
          <Col>
            <Tab id={this.props.match.params.id} />
          </Col>
        </Row>
        <Row id='scorers-row'>
          <Col>
            <Card id='scorers-title' color='dark' body>
              <CardTitle>TOP SCORERS</CardTitle>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Table id='scorers-table' striped>
                <tbody>
                  {scorers.map((scorer, i) => (
                    <tr key={i}>
                      <th scope='row'>{i + 1}.</th>
                      <td>{scorer.numberOfGoals}</td>
                      <td>{scorer.player.name}</td>
                      <td>{scorer.team.name}</td>
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
