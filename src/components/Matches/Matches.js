import React, { Component } from 'react';
import { Card, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

import './Matches.css';
import { fetchGames } from '../../api.js';

export default class Matches extends Component {
  state = {
    games: [],
    isLoading: true,
    error: null
  };

  componentDidMount() {
    this.getGames();
  }

  getGames = () => {
    fetchGames()
      .then(data => {
        this.setState({ games: data.matches, isLoading: false });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  };

  render() {
    const { isLoading, games, error } = this.state;
    let filteredLeagues = [];
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Ooops...</p>;
    console.log(games);
    return (
      <div className='games-container'>
        {games.map(game => (
          <div className='games-wrapper' key={game.id}>
            <Card
              color='dark'
              style={{
                width: '100%'
              }}
              body
            >
              <Link to={`/competitions/${game.competition.id}`}>
                <CardTitle>
                  {!filteredLeagues.includes(game.competition.name) &&
                    game.competition.name}
                </CardTitle>
              </Link>
              <Link to={`/matches/${game.id}`}>
                <CardSubtitle>
                  {game.homeTeam.name} - {game.awayTeam.name}
                </CardSubtitle>
                <CardText>
                  {game.score.fullTime.homeTeam
                    ? game.score.fullTime.homeTeam
                    : '0'}{' '}
                  :{' '}
                  {game.score.fullTime.awayTeam
                    ? game.score.fullTime.awayTeam
                    : '0'}{' '}
                  <br />(
                  {game.score.halfTime.homeTeam
                    ? game.score.halfTime.homeTeam
                    : '0'}{' '}
                  :{' '}
                  {game.score.halfTime.awayTeam
                    ? game.score.halfTime.awayTeam
                    : '0'}
                  )
                </CardText>
              </Link>
            </Card>
            {!filteredLeagues.push(game.competition.name)}
          </div>
        ))}
      </div>
    );
  }
}
