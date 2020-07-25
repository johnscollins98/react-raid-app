import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';

import data from '../assets/data/data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IWing } from '../utilities/Interfaces';

import Nav from './Nav';
import EncounterRouter from './EncounterRouter';
import HomePage from './HomePage';

function App() {
  const wings:Array<IWing> = data;
  return (
    <Router>
      <Nav wings={wings} />
      <div className="content">
        <Switch>
          <Route path="/encounter/:wing/:encounter">
            <EncounterRouter wings={wings}/>
          </Route>
          <Route path="/">
            <HomePage errorMessage="" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
