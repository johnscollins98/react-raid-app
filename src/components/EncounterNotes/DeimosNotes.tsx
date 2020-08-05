import React from "react";

import RoleEmbed from "./../RoleEmbed/RoleEmbed";
import GW2Skill from "./../GW2Skill/GW2Skill";

function DeimosNotes() {
  return (
    <div>
      <h3>General</h3>
      <ul>
        <li>
          <RoleEmbed role="Heal" profession="firebrand" /> tanks.
        </li>
        <li>
          Banana "black kite" (only necessary during <GW2Skill id="37613" />
          ).
        </li>
        <li>
          Everyone except <RoleEmbed role="Heal" profession="firebrand" /> and{" "}
          <RoleEmbed role="Hand Kite" profession="herald" /> goes down for
          greens. For last add (assuming we don't sacrifice) save all CCs until
          we're back above ground.
        </li>
      </ul>
    </div>
  );
}

export default DeimosNotes;
