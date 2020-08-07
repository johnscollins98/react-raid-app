import React from "react";
import { TooltipTrigger } from 'armory-component-ui';

import { ICustomGW2SkillProps } from "../../utilities/Interfaces";

function CustomGW2Skill(props: ICustomGW2SkillProps) {
  const img = require(`../../assets/images/skill-icons/${props.id}.png`);
  return (
    <TooltipTrigger
      data={{
        name: props.label,
        description: "Custom embed for broken API."
      }}
      type="skill"
    >
      <span>

        <img height="25" width="25" src={img} alt={props.label}/>{" "}
        <a href={props.wikiLink}>{props.label}</a>
      </span>
    </TooltipTrigger>
  )
}

export default CustomGW2Skill;
