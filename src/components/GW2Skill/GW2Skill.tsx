import React from 'react';

import './GW2Skill.css';
import { ISkillProps } from '../../utilities/Interfaces';

function GW2Skill(props: ISkillProps) {
  return (
    <span
      data-armory-embed="skills" data-armory-ids={`${props.id}`}
      data-armory-size="25"
      data-armory-inline-text="wiki">
    </span>
  )
}

export default GW2Skill;