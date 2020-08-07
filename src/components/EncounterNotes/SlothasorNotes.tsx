import React from "react";

import RoleEmbed from "../RoleEmbed/RoleEmbed";
import GW2Skill from "../GW2Skill/GW2Skill";
import MiscEmbed from "../MiscEmbed/MiscEmbed";

function SlothasorNotes() {
  return (
    <div>
      <h3>General</h3>
      <ul>
        <li>Keep Sloth at beginning until CC at 80%.</li>
        <li>
          <RoleEmbed role="Heal" profession="firebrand" /> provides{" "}
          <MiscEmbed id="stability" /> after each CC phase.
        </li>
        <li>Tank as close to the middle as possible (face towards middle).</li>
      </ul>
      <h3>Pulling Slublings</h3>
      <ul>
        <li>
          <RoleEmbed role="Pwr Boon" profession="chronomancer" /> pull slublings
          together with <GW2Skill id="10186" />.
        </li>
        <li>
          <RoleEmbed role="Heal" profession="firebrand" /> pull slublings to the
          group with <GW2Skill id="45402" />.
        </li>
      </ul>
      <h3>Mushrooms/Slublings</h3>
      <ul>
        <li>1 - Whiskers</li>
        <li>2 - Vakill</li>
        <li>3 - Alucard</li>
        <li>4 - Deekay</li>
      </ul>
    </div>
  );
}

export default SlothasorNotes;
