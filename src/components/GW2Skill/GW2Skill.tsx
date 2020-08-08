import React from "react";
import { Gw2Skill, Tooltip } from "armory-component-ui";

import { IGW2EmbedProps } from "../../utilities/Interfaces";
import "../../utilities/GW2Embeds.css";

function GW2Skill(props: IGW2EmbedProps) {
  return (
    <span>
      <Gw2Skill id={props.id} inlineText="wiki" size="25" />
      <Tooltip className="embed-tooltip" />
    </span>
  );
}

export default GW2Skill;
