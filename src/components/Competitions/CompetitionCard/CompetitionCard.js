import React, { Component } from 'react';

export default class CompetitionCard extends Component {
  state = {
    competition: null,
    isLoading: true,
    error: null
  };

  componentDidMount() {}
  render() {
    console.log(this.props, '<<<<<CARD');
    return <div className='competition-container'>Hello</div>;
  }
}
