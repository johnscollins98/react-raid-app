import React from "react";

import RoleEmbed from "../RoleEmbed/RoleEmbed";
import GW2Skill from "../GW2Skill/GW2Skill";
import BoonEmbed from "../BoonEmbed/BoonEmbed";

function DhuumNotes() {
  return (
    <div>
      <h3>General</h3>
      <ul>
        <li>
          Non-kiting <RoleEmbed role="Heal" profession="druid" /> tanks.
        </li>
        <li>
          <RoleEmbed role="Cnd" profession="firebrand" /> precast{" "}
          <GW2Skill id="40988" /> in <GW2Skill id="42259" /> for{" "}
          <BoonEmbed id="resistance" /> before splits. You should also jump into{" "}
          <GW2Skill id="41780" /> for <GW2Skill id="40679" /> to provide
          condition cleanse to your subgroup.
        </li>
      </ul>
      <h3>Greens</h3>
      <ul>
        <li>G1 - Elosia</li>
        <li>G2 - Quan</li>
        <li>G3 - CrackedSass</li>
        <li>Backup - Deekay</li>
      </ul>
    </div>
  );
}

export default DhuumNotes;
