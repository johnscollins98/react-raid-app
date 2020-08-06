import React from "react";

import RoleEmbed from "../RoleEmbed/RoleEmbed";
import GW2Skill from "../GW2Skill/GW2Skill";

function CardinalSabirNotes() {
  return (
    <div>
      <h3>General</h3>
      <ul>
        <li>
          <RoleEmbed role="Heal" profession="firebrand" /> tanks.
        </li>
        <li>
          <RoleEmbed role="Pwr Banner" profession="berserker" /> deals with adds
          on the edges. Use <GW2Skill id="21815" /> to skip{" "}
          <GW2Skill id="56643" />.
        </li>
        <li>
          <RoleEmbed role="Pwr" profession="holosmith" /> can skip{" "}
          <GW2Skill id="56643" /> with <GW2Skill id="21659" />
        </li>
        <li>
          Everyone should make their contributions to CC breakbars with all
          they've got.
        </li>
        <li>
          Due to Cardinal Sabir's hitbox size{" "}
          <RoleEmbed role="Pwr Boon" profession="renegade" /> can safely{" "}
          <GW2Skill id="28978" /> without passing through her, landing all hits.
        </li>
      </ul>
    </div>
  );
}

export default CardinalSabirNotes;
