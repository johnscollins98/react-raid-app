import React from "react";

import RoleEmbed from "../RoleEmbed/RoleEmbed";
import GW2Skill from "../GW2Skill/GW2Skill";
import BoonEmbed from "../BoonEmbed/BoonEmbed";
import CustomGW2Skill from "../CustomGW2Skill/CustomGW2Skill";

function DhuumNotes() {
  return (
    <div>
      <h3>General</h3>
      <ul>
        <li>
          Non-kiting <RoleEmbed role="Heal" profession="druid" /> tanks.
        </li>
        <li>
          <RoleEmbed role="Cnd" profession="firebrand" /> precast{" "}
          <CustomGW2Skill
            id="stalwart-stand"
            label="Chapter 4: Stalwart Stand"
            wikiLink="https://wiki.guildwars2.com/wiki/Chapter_4:_Stalwart_Stand"
          />{" "}
          in <GW2Skill id="42259" /> for <BoonEmbed id="resistance" /> before{" "}
          splits.
        </li>
        <li>
          You should also jump into <GW2Skill id="41780" /> and can use{" "}
          <CustomGW2Skill
            id="radiant-recovery"
            label="Chapter 2: Radiant Recovery"
            wikiLink="https://wiki.guildwars2.com/wiki/Chapter_2:_Radiant_Recovery"
          />{" "}
          to provide condition cleanse to your subgroup.
        </li>
      </ul>
      <h3>Greens</h3>
      <ul>
        <li>G1 - Elosia</li>
        <li>G2 - Quan</li>
        <li>G3 - CrackedSass</li>
        <li>Backup - Deekay</li>
      </ul>
    </div>
  );
}

export default DhuumNotes;
