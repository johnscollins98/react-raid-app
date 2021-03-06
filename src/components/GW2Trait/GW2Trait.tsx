import React from "react";
import { Gw2Trait, Tooltip } from "armory-component-ui";

import { IGW2EmbedProps } from "../../utilities/Interfaces";
import "../../utilities/GW2Embeds.css";

function GW2Trait(props: IGW2EmbedProps) {
  return (
    <span>
      <Gw2Trait id={props.id} inlineText="wiki" size="25" active="true" />
      <Tooltip className="embed-tooltip" />
    </span>
  );
}

export default GW2Trait;
