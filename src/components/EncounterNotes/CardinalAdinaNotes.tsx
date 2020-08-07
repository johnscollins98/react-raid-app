import React from "react";

import RoleEmbed from "../RoleEmbed/RoleEmbed";
import GW2Skill from "../GW2Skill/GW2Skill";

function CardinalAdinaNotes() {
  return (
    <div>
      <h3>Individual Jobs</h3>
      <ul>
        <li>
          <RoleEmbed role="Pwr" profession="dragonhunter" />s and{" "}
          <RoleEmbed role="Heal" profession="druid" /> do pillars.
        </li>
        <li>
          <RoleEmbed role="Heal" profession="thief" /> takes care of reflects on
          3 hands (1st and 4th with <GW2Skill id="13065" /> and 2nd with{" "}
          <GW2Skill id="13099" />
          ).
        </li>
        <li>
          <RoleEmbed role="Heal" profession="druid" /> places{" "}
          <GW2Skill id="31496" /> behind the group at 3rd.
        </li>
        <li>
          In case <RoleEmbed role="Heal" profession="thief" /> or{" "}
          <RoleEmbed role="Heal" profession="druid" /> refuse to do their jobs,{" "}
          <RoleEmbed role="Pwr Boon" profession="renegade" /> has to take{" "}
          <GW2Skill id="26821" />.
        </li>
      </ul>
    </div>
  );
}

export default CardinalAdinaNotes;
