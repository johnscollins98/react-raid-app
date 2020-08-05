import React from "react";

import RoleEmbed from "../RoleEmbed/RoleEmbed";
import GW2Skill from "../GW2Skill/GW2Skill";
import BoonEmbed from "../BoonEmbed/BoonEmbed";

function SlothasorNotes() {
  return (
    <div>
      <h3>General</h3>
      <ul>
        <li>Keep Sloth at beginning until CC at 80%.</li>
        <li>
          <RoleEmbed role="Heal" profession="firebrand" /> provides{" "}
          <BoonEmbed id="stability" /> after each CC phase.
        </li>
        <li>Tank as close to the middle as possible (face towards middle).</li>
        <li>
          <RoleEmbed role="" profession="chronomancer" />s work together to pull
          slublings into the group with <GW2Skill id="10186" />.
        </li>
        <li>
          <RoleEmbed role="" profession="firebrand" /> can help with pulling
          with <GW2Skill id="45402" />.
        </li>
      </ul>
      <h3>Slublings</h3>
      <ul>
        <li>1 - Whiskers</li>
        <li>2 - Vakill</li>
        <li>3 - Quan</li>
        <li>4 - Deekay</li>
      </ul>
      <h3>
        <strong>Quick</strong> CC!
      </h3>
      <ul>
        <li>
          <RoleEmbed role="Pwr" profession="holosmith" /> please delay{" "}
          <GW2Skill id="5813" /> and precast just before the CC phase.
        </li>
        <li>
          <RoleEmbed role="Pwr" profession="dragonhunter" /> should save{" "}
          <GW2Skill id="9093" /> and <GW2Skill id="30273" /> for CC.
        </li>
      </ul>
    </div>
  );
}

export default SlothasorNotes;
