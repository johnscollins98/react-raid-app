import React from "react";

import RoleEmbed from "../RoleEmbed/RoleEmbed";
import BoonEmbed from "../BoonEmbed/BoonEmbed";
import GW2Trait from "../GW2Trait/GW2Trait";
import GW2Skill from "../GW2Skill/GW2Skill";

function RiverNotes() {
  return (
    <div>
      <h3>General</h3>
      <ul>
        <li>Subgroup 1 runs ahead.</li>
        <li>Subgroup 2 stays with Desmina.</li>
        <li>
          <RoleEmbed role="Heal" profession="tempest" /> can go back to help
          Desmina (no more than 4 allies on her or she doesn’t get the{" "}
          <BoonEmbed id="aegis" />
          ).
        </li>
        <li>
          <RoleEmbed role="Superspeed" profession="scrapper" /> should take{" "}
          <GW2Skill id="31248" /> and provide superspeed with{" "}
          <GW2Trait id="1917" /> (each gyro skill is a well){" "}
          <GW2Trait id="2014" /> <GW2Skill id="29665" />
        </li>
      </ul>
    </div>
  );
}

export default RiverNotes;
