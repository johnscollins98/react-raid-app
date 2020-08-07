import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { reducers } from "armory-component-ui";

import { mockEncounter } from "../../utilities/MockData";

import Encounter from "./Encounter";

const store = createStore(
  // Create the root reducer.
  combineReducers(reducers),

  // Set the thunk middleware.
  applyMiddleware(thunk)
);

it("renders without failing", () => {
  render(
    <Provider store={store}>
      <Encounter {...mockEncounter} />)
    </Provider>
  );
});
