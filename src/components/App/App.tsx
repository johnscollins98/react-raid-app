// npm imports
import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { reducers } from "armory-component-ui";
import axios from "axios";
import "armory-component-ui/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-modal-video/scss/modal-video.scss";

import "./App.css";

import Nav from "../Nav/Nav";
import EncounterRouter from "../EncounterRouter";
import HomePage from "../HomePage/HomePage";

const store = createStore(
  // Create the root reducer.
  combineReducers(reducers),

  // Set the thunk middleware.
  applyMiddleware(thunk)
);

function App() {
  const [wings, setWings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://so-raid-editor.herokuapp.com/api/wings");
      setWings(res.data);
    }
    fetchData();
  }, [])

  // const wings: Array<IWing> = data;
  if (wings.length === 0) return <p>Loading Data...</p>;
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
