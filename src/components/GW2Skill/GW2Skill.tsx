import React from "react";
import { Gw2Skill, Tooltip } from "armory-component-ui";

import { IGW2EmbedProps } from "../../utilities/Interfaces";
import "../../utilities/GW2Embeds.css";

function GW2Skill(props: IGW2EmbedProps) {
  return (
    <span>
      <Gw2Skill className="gw2-embed" id={props.id} inlineText="wiki" />
      <Tooltip className="embed-tooltip" />
    </span>
  );
}

export default GW2Skill;
