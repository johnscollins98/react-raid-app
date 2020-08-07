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
          Any of the DPS players "black kite" (only necessary during{" "}
          <GW2Skill id="37613" />
          ). <i>This is usually Banana.</i>
        </li>
        <li>
          Everyone except <RoleEmbed role="Heal" profession="firebrand" /> and{" "}
          <RoleEmbed role="Hand Kite" profession="herald" /> goes down for
          greens.
        </li>
      </ul>
      <h3>25% Sacrifice</h3>
      <ul>
        <li>At 25%; whoever gets green can go down alone.</li>
        <li>
          When we go down at 10% the{" "}
          <RoleEmbed role="Pwr Banner" profession="berserker" /> and{" "}
          <RoleEmbed role="Pwr Boon" profession="renegade" /> can CC Saul to
          prevent teleports.
        </li>
      </ul>
    </div>
  );
}

export default DeimosNotes;
