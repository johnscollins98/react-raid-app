import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "armory-component-ui/styles.css";
import "../App/App.css";
import { Provider } from "react-redux";
import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { reducers } from "armory-component-ui";

import "../../index.css";
import { mockEncounter } from "../../utilities/MockData";

import Encounter from "./Encounter";

export default { title: "Encounter" };

const store = createStore(
  // Create the root reducer.
  combineReducers(reducers),

  // Set the thunk middleware.
  applyMiddleware(thunk)
);

export const withValid = () => {
  return (
    <Provider store={store}>
      <Encounter {...mockEncounter} />;
    </Provider>
  );
};
