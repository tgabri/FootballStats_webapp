import React, { Component } from 'react';
import { Card, CardTitle, Row, Col, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

import './AreaCard.css';
import { fetchArea } from '../../api';

export default class AreaCard extends Component {
  state = {
    area: null,
    isLoading: true,
    error: null
  };

  componentDidMount() {
    this.getArea();
  }

  getArea = () => {
    const { areaID } = this.props.match.params;

    fetchArea(areaID)
      .then(area => this.setState({ area, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  };

  render() {
    const { isLoading, area, error } = this.state;

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Ooops...</p>;

    return (
      <div className='area-container'>
        <Row id='area-row'>
          <Col>
            <Card id='areacard-title' color='dark' body>
              <CardTitle>{area.name}</CardTitle>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Table id='areacard-table' striped>
                <tbody>
                  <tr>
                    <th scope='row'>Country Code:</th>
                    <td>{area.countryCode}</td>
                  </tr>
                  <tr>
                    <th scope='row'>Continent:</th>
                    <td>{area.parentArea}</td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
