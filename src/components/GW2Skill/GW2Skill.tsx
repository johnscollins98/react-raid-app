import React from "react";
import { Gw2Skill, Tooltip } from "armory-component-ui";

import { IGW2EmbedProps } from "../../utilities/Interfaces";

function GW2Skill(props: IGW2EmbedProps) {
  return (
    <span>
      <Gw2Skill id={props.id} inlineText="wiki" size="25" />
      <Tooltip />
    </span>
  );
}

export default GW2Skill;
