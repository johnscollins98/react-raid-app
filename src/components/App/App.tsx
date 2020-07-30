import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';

import data from '../../assets/data/data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IWing } from '../../utilities/Interfaces';

import Nav from '../Nav/Nav';
import EncounterRouter from '../EncounterRouter';
import HomePage from '../HomePage/HomePage';

function App() {
  const wings: Array<IWing> = data;
  return (
    <Router>
      <Nav wings={wings} />
      <Switch>
        <Route path="/encounter/:wing/:encounter">
          <EncounterRouter wings={wings} />
        </Route>
        <Route path="/">
          <HomePage errorMessage="" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
