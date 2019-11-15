import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Homepage from './components/Homepage/Homepage';
import Competitions from './components/Competitions/Competitions';
import CompetitionCard from './components/Competitions/CompetitionCard/CompetitionCard';
require('dotenv').config();

function App() {
  return (
    <>
      <div className='App'>
        <NavBar />
        <Switch>
          <Route path='/competitions/:compID' component={CompetitionCard} />
          <Route path='/competitions' exact component={Competitions} />
          <Route path='/' exact component={Homepage} />
          <Redirect to='/' />
        </Switch>
        <Footer />
      </div>
    </>
  );
}

export default App;
