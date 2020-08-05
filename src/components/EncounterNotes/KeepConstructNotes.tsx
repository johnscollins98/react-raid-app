import React from "react";

import RoleEmbed from "../RoleEmbed/RoleEmbed";
import GW2Skill from "../GW2Skill/GW2Skill";

function KeepConstructNotes() {
  return (
    <div>
      <h3>General</h3>
      <ul>
        <li>
          <RoleEmbed role="Heal" profession="druid" /> tanks
        </li>
        <li>
          <RoleEmbed role="Cnd Boon" profession="firebrand" /> should help out
          with heals with <GW2Skill id="41780" /> during orb/collecting phases.
        </li>
        <li>
          <RoleEmbed role="Pwr" profession="holosmith" /> can take{" "}
          <GW2Skill id="5857" /> if more healing is needed.
        </li>
        <li>
          Attack KC during the collecting phase to heal from{" "}
          <GW2Skill id="21773" />
        </li>
        <li>
          If during the collecting phase you're assigned red color, DO NOT TAKE
          WHITE ORBS (and vice versa)
        </li>
        <li>
          We're doing 2 orbs. <RoleEmbed role="Pwr Boon" profession="chronomancer" />{" "}
          help the <RoleEmbed role="Heal" profession="druid" /> with pushing
        </li>
        <li>Be ready with boons in time for bursting KC.</li>
        <li>
          DPS and stack tightly after collecting phase (during{" "}
          <GW2Skill id="34971" />) to get healing from <GW2Skill id="31677" />.
        </li>
      </ul>
      <h3>Splitting up</h3>
      <ul>
        <li>Circle - CrackedSass, Whiskers, Millie</li>
        <li>Heart - Elosia, Blaster, Miruna</li>
        <li>Arrow - Everyone else</li>
      </ul>
    </div>
  );
}

export default KeepConstructNotes;
