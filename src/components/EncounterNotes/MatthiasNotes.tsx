import React from "react";

import RoleEmbed from "../RoleEmbed/RoleEmbed";
import GW2Skill from "../GW2Skill/GW2Skill";

function MatthiasNotes() {
  return (
    <div>
      <h3>Individual Jobs</h3>
      <ul>
        <li>
          <RoleEmbed role="Cnd" profession="mirage" /> brings
          <GW2Skill id="10302" />.
        </li>
        <li>
          <RoleEmbed role="Pwr Boon" profession="daredevil" /> /{" "}
          <RoleEmbed role="" profession="druid" /> block <GW2Skill id="34404" />
          .
        </li>
        <li>
          <RoleEmbed role="Pwr Boon" profession="daredevil" /> uses{" "}
          <GW2Skill id="13132" /> / <GW2Skill id="13012" /> for CC.
        </li>
        <li>
          If CC is poor, swap <RoleEmbed role="Cnd" profession="berserker" />{" "}
          for <RoleEmbed role="Pwr" profession="berserker" /> with maces.
        </li>
        <li>
          <RoleEmbed role="Cnd" profession="firebrand" /> take care to not
          cleave the sacrificial lamb down.
        </li>
      </ul>
    </div>
  );
}

export default MatthiasNotes;
