import React from "react";

import "./GW2Skill.css";
import { ISkillProps, GW2EmbedTypes } from "../../utilities/Interfaces";
import GW2Embed from "../GW2Embed/GW2Embed";

function GW2Skill(props: ISkillProps) {
  return <GW2Embed type={GW2EmbedTypes.Skill} {...props} />;
}

export default GW2Skill;
