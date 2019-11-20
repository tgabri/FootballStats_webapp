import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Homepage from './components/Homepage/Homepage';
import Competitions from './components/Competitions/Competitions';
import CompetitionCard from './components/Competitions/CompetitionCard/CompetitionCard';
import PastWinners from './components/Competitions/CompetitionCard/PastWinners/PastWinners';
import Teams from './components/Teams/Teams';
import TeamCard from './components/Teams/TeamCard/TeamCard';
import PlayerCard from './components/PlayerCard/PlayerCard';
import Matches from './components/Matches/Matches';
import MatchCard from './components/Matches/MatchCard/MatchCard';
import AreaCard from './components/AreaCard/AreaCard';
import Standings from './components/Competitions/CompetitionCard/Standings/Standings';
import Scorers from './components/Competitions/CompetitionCard/Scorers./Scorers';
import CompetitionTeams from './components/Competitions/CompetitionCard/CompetitionTeams/CompetitionTeams';
require('dotenv').config();

function App() {
  return (
    <>
      <div className='App'>
        <NavBar />
        <div className='app-container'>
          <Switch>
            <Route
              path='/competitions/:id/pastwinners'
              exact
              component={PastWinners}
            />
            <Route
              path='/competitions/:id/standings'
              exact
              component={Standings}
            />
            <Route path='/competitions/:id/scorers' exact component={Scorers} />
            <Route
              path='/competitions/:id/teams'
              exact
              component={CompetitionTeams}
            />
            <Route path='/competitions/:id' exact component={CompetitionCard} />
            <Route path='/competitions' exact component={Competitions} />
            <Route path='/teams/:teamID' component={TeamCard} />
            <Route path='/teams' eaxct component={Teams} />
            <Route path='/matches/:matchID' component={MatchCard} />
            <Route path='/matches' eaxct component={Matches} />
            <Route path='/players/:playerID' component={PlayerCard} />
            <Route path='/areas/:areaID' component={AreaCard} />
            <Route path='/' exact component={Homepage} />
            <Redirect to='/' />
          </Switch>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
