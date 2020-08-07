import React from "react";

import RoleEmbed from "../RoleEmbed/RoleEmbed";
import GW2Skill from "../GW2Skill/GW2Skill";
import CustomGW2Skill from "../CustomGW2Skill/CustomGW2Skill";

function MatthiasNotes() {
  return (
    <div>
      <h3>Individual Jobs</h3>
      <ul>
        <li>
          <RoleEmbed role="Cnd" profession="firebrand" />s alternate using{" "}
          <CustomGW2Skill
            id="valiant-bulwark"
            label="Chapter 3: Valiant Bulwark"
            wikiLink="https://wiki.guildwars2.com/wiki/Chapter_3:_Valiant_Bulwark"
          />{" "}
          in <GW2Skill id="42259" /> to reflect <GW2Skill id="34480" /> and
          break his shield.
        </li>
        <li>
          <RoleEmbed role="Pwr Boon" profession="daredevil" /> /{" "}
          <RoleEmbed role="Heal" profession="druid" /> block{" "}
          <GW2Skill id="34404" />.
        </li>
        <li>
          <RoleEmbed role="Pwr Boon" profession="daredevil" /> uses{" "}
          <GW2Skill id="13132" /> / <GW2Skill id="13012" /> for CC.
        </li>
        <li>
          If CC is poor, swap{" "}
          <RoleEmbed role="Cnd Banner" profession="berserker" /> for{" "}
          <RoleEmbed role="Pwr Banner" profession="berserker" /> with maces.
        </li>
        <li>
          <RoleEmbed role="Cnd" profession="firebrand" /> take care to not{" "}
          cleave the sacrificial lamb down.
        </li>
      </ul>
    </div>
  );
}

export default MatthiasNotes;
