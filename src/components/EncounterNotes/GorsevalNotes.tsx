import React from "react";

import RoleEmbed from "../RoleEmbed/RoleEmbed";
import GW2Skill from "../GW2Skill/GW2Skill";
import MiscEmbed from "../MiscEmbed/MiscEmbed";

function GorsevalNotes() {
  return (
    <div>
      <h3>General</h3>
      <ul>
        <li>
          <RoleEmbed role="Cnd Boon" profession="firebrand" /> tanks the boss.
        </li>
        <li>
          <RoleEmbed role="Pwr Boon" profession="chronomancer" /> pull adds with{" "}
          <GW2Skill id="10186" />
        </li>
        <li>
          <RoleEmbed role="Pwr" profession="dragonhunter" /> deal with Orbs with{" "}
          scepter. It shouldn't require too much attention.
        </li>
        <li>
          <RoleEmbed role="Pwr Banner" profession="berserker" /> remember that{" "}
          <GW2Skill id="30343" /> strips <MiscEmbed id="stability" />.
        </li>
      </ul>
      <h3>Gorseval's Slams</h3>
      <ul>
        <li>
          <RoleEmbed role="Cnd Boon" profession="firebrand" /> take{" "}
          <GW2Skill id="41714" /> and use <GW2Skill id="41475" /> to provide
          your subgroup <MiscEmbed id="aegis" /> for <GW2Skill id="31875" />
        </li>
        <li>
          <RoleEmbed role="Pwr Boon" profession="chronomancer" /> take{" "}
          <GW2Skill id="10237" /> and use <GW2Skill id="10238" /> to provide
          your subgroup <MiscEmbed id="stability" /> for <GW2Skill id="31875" />
        </li>
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
      <h3>Split Phase</h3>
      <ul>
        <li>
          Subgroup 1 goes left (<MiscEmbed id="arrow" />)
        </li>
        <li>
          Subgroup 2 goes right (<MiscEmbed id="circle" />)
        </li>
      </ul>
    </div>
  );
}

export default GorsevalNotes;
