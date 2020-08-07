import React from "react";

import RoleEmbed from "../RoleEmbed/RoleEmbed";
import GW2Skill from "../GW2Skill/GW2Skill";
import GW2Trait from "../GW2Trait/GW2Trait";

function SoullessHorrorNotes() {
  return (
    <div>
      <h3>Tanking</h3>
      <ul>
        <li>
          <RoleEmbed role="Pwr Boon" profession="chronomancer" /> and{" "}
          <RoleEmbed role="Heal" profession="firebrand" /> tank.
        </li>
        <li>Tanks, don't be mutes, state clearly where you intend to move</li>
      </ul>
      <h3>Golems</h3>
      <ul>
        <li>
          <RoleEmbed role="Heal" profession="druid" /> should take{" "}
          <GW2Trait id="1698" /> in Marksmanship for pushing.
        </li>
        <li>
          Don't CC the golem or the druid <strong>will</strong> yell at you
        </li>
      </ul>
      <h3>CC Phase</h3>
      <ul>
        <li>Be ready for the first CC at 66%.</li>
        <li>
          After 66%, CC comes up after every 2nd <GW2Skill id="48500" />.
        </li>
        <li>Remember that when the CC phase triggers all walls despawn.</li>
      </ul>
    </div>
  );
}

export default SoullessHorrorNotes;
