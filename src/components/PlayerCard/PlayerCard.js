import React, { Component } from 'react';
import { Card, CardTitle, Row, Col, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

import './PlayerCard.css';
import { fetchPlayer } from '../../api';

export default class PlayerCard extends Component {
  state = {
    player: null,
    isLoading: true,
    error: null
  };

  componentDidMount() {
    this.getPlayer();
  }

  getPlayer = () => {
    const { playerID } = this.props.match.params;

    fetchPlayer(playerID)
      .then(player => this.setState({ player, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  };

  render() {
    const { isLoading, player, error } = this.state;
    const keyArray = [];
    for (let key in player) {
      keyArray.push(key);
    }
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Ooops...</p>;
    console.log(player);
    console.log('dateOfBirth'.split(/(?=[A-Z])/).join(' '));
    return (
      <div className='player-container'>
        <Row id='player-row'>
          <Col>
            <Card id='playercard-title' color='dark' body>
              <CardTitle>{player.name}</CardTitle>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card id='playercard-title' color='dark' body>
              <CardTitle>Profile</CardTitle>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Table id='playercard-table' striped>
                <tbody>
                  {keyArray.map(key => {
                    let fullName = player.name.split(' ');
                    return key === 'id' || key === 'lastUpdated' ? null : (
                      <tr key={key}>
                        <th scope='row'>{key.split(/(?=[A-Z])/).join(' ')}:</th>
                        <td>
                          {key === 'lastName'
                            ? fullName[fullName.length - 1]
                            : player[key]}
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
