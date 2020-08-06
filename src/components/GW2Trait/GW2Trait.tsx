import React from "react";

import "./GW2Trait.css";
import { ITraitProps, GW2EmbedTypes } from "../../utilities/Interfaces";
import GW2Embed from "../GW2Embed/GW2Embed";

function GW2Trait(props: ITraitProps) {
  return <GW2Embed type={GW2EmbedTypes.Trait} {...props} />;
}

export default GW2Trait;
