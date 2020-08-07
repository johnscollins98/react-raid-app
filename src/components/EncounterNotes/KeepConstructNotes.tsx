import React from "react";

import RoleEmbed from "../RoleEmbed/RoleEmbed";
import GW2Skill from "../GW2Skill/GW2Skill";

function KeepConstructNotes() {
  return (
    <div>
      <h3>General</h3>
      <ul>
        <li>
          <RoleEmbed role="Heal" profession="druid" /> tanks.
        </li>
      </ul>
      <h3>Orb Phase</h3>
      <ul>
        <li>
          <RoleEmbed role="Heal" profession="druid" /> pushes 2 orbs. (1 for
          first phase is usually fine)
        </li>
        <li>
          <RoleEmbed role="Pwr Boon" profession="chronomancer" /> help the{" "}
          <RoleEmbed role="Heal" profession="druid" /> with orbs using{" "}
          <GW2Skill id="10186" />.
        </li>
        <li>
          Everyone be ready with boons in time for bursting Keep Construct.
        </li>
      </ul>
      <h3>Surviving while Druid pushes</h3>
      <ul>
        <li>
          <RoleEmbed role="Cnd Boon" profession="firebrand" /> should help out
          with heals with <GW2Skill id="41780" /> during orb/collecting phases.
        </li>
        <li>
          <RoleEmbed role="Pwr" profession="dragonhunter" /> can use{" "}
          <GW2Skill id="30783" /> to help also.
        </li>
        <li>
          <RoleEmbed role="Pwr" profession="holosmith" /> can take{" "}
          <GW2Skill id="5857" /> if more healing is <strong>needed</strong>.
        </li>
        <li>Use your own heal skills!</li>
      </ul>
      <h3>Collection Phase</h3>
      <ul>
        <li>
          Attack Keep Construct during the collecting phase to heal from{" "}
          <GW2Skill id="21773" />.
        </li>
        <li>
          <strong>Only collect orbs with the same color as you!</strong>
        </li>

        <li>
          DPS and stack tightly after collecting phase (during{" "}
          <GW2Skill id="34971" />) to get healing from <GW2Skill id="31677" />.
        </li>
      </ul>
    </div>
  );
}

export default KeepConstructNotes;
