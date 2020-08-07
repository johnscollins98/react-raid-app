import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import 'armory-component-ui/styles.css';
import { Provider } from 'react-redux';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from 'armory-component-ui';

import data from '../../assets/data/data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IWing } from '../../utilities/Interfaces';

import Nav from '../Nav/Nav';
import EncounterRouter from '../EncounterRouter';
import HomePage from '../HomePage/HomePage';

const store = createStore(
  // Create the root reducer.
  combineReducers(reducers),

  // Set the thunk middleware.
  applyMiddleware(thunk),
);

function App() {
  const wings: Array<IWing> = data;
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
