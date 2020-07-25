import React from "react";
import { useParams } from "react-router-dom";

import { IEncounterRouterProps, IRouterParams } from "../utilities/Interfaces";

import Encounter from "./Encounter/Encounter";
import HomePage from "./HomePage/HomePage";

function EncounterRouter(props: IEncounterRouterProps) {
  const params = useParams<IRouterParams>();

  const foundWing = props.wings.find(wing => wing.id === params.wing);
  if (foundWing == null) {
    return <HomePage errorMessage="Cannot find given Wing ID" />
  }

  const foundEncounter = foundWing?.encounters.find(encounter => encounter.id === params.encounter);
  if (foundEncounter == null) {
    return <HomePage errorMessage="Cannot find given Encounter id." />
  }

  return <Encounter {...foundEncounter} />
}

export default EncounterRouter;