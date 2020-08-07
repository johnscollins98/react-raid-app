import React from "react";
import { Gw2Skill, Tooltip } from 'armory-component-ui';

import { ISkillProps } from "../../utilities/Interfaces";

function GW2Skill(props: ISkillProps) {
  return (
    <span>
      <Gw2Skill id={props.id} inlineText="wiki" size="25" />
      <Tooltip />
    </span>
  )
}

export default GW2Skill;
