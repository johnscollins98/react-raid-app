import React from "react";
import { TooltipTrigger } from "armory-component-ui";

import { ICustomGW2SkillProps } from "../../utilities/Interfaces";
import "../../utilities/GW2Embeds.css";

function CustomGW2Skill(props: ICustomGW2SkillProps) {
  return (
    <TooltipTrigger
      data={{
        name: props.label,
        description: "Custom embed for broken API.",
      }}
      type="skill"
      className="embed-tooltip"
    >
      <span>
        <img height="25" width="25" src={props.imageLink} alt={props.label} />{" "}
        <a href={props.wikiLink}>{props.label}</a>
      </span>
    </TooltipTrigger>
  );
}

export default CustomGW2Skill;
