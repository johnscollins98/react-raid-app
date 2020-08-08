import React from "react";

import RoleEmbed from "../RoleEmbed/RoleEmbed";
import GW2Skill from "../GW2Skill/GW2Skill";
import CustomGW2Skill from "../CustomGW2Skill/CustomGW2Skill";
import MiscEmbed from "../MiscEmbed/MiscEmbed";

function QadimNotes() {
  return (
    <div>
      <h3>Qadim's Pets</h3>
      <ul>
        <li>
          Hydra:
          <ul>
            <li>
              Anyone can tank this boss,{" "}
              <RoleEmbed role="Heal" profession="tempest" /> can main tank if
              others aren't confident.
            </li>
            <li>
              <RoleEmbed role="Pwr Boon" profession="chronomancer" /> should
              take over if <RoleEmbed role="Kite" profession="deadeye" /> needs
              heals.
            </li>
            <li>Remember rotation: Regular x 2; Special; Regular x 2, CC.</li>
          </ul>
        </li>
        <li>
          Pyre Guardian:
          <ul>
            <li>Start stacked tightly, be ready to CC and kill the 3 adds.</li>
            <li>Same tank as before, same rotation.</li>
          </ul>
        </li>
        <li>
          Wyverns
          <ul>
            <li>
              <RoleEmbed role="Pwr Boon" profession="chronomancer" /> can tank
              the Wyvern Patriarch.
            </li>
            <li>
              <RoleEmbed role="Heal" profession="tempest" /> can tank Wyvern
              Matriarch.
            </li>
            <li>
              <RoleEmbed role="Pwr Banner" profession="berserker" /> and{" "}
              <RoleEmbed role="Pwr Boon" profession="renegade" /> should go to
              Patriach to help CC. Either can go break the lamp AFTER CC.
            </li>
            <li>
              All DPS and <RoleEmbed role="Heal" profession="druid" /> should go
              into the lamp.
            </li>
            <li>
              If <s>shit</s> hits the fan or{" "}
              <RoleEmbed role="Kite" profession="deadeye" /> needs heals then{" "}
              <RoleEmbed role="Pwr Boon" profession="chronomancer" /> should
              tank Matriarch while{" "}
              <RoleEmbed role="Pwr Banner" profession="berserker" /> tanks
              Patriarch and <RoleEmbed role="Heal" profession="tempest" /> heals
              the kiter.
            </li>
          </ul>
        </li>
      </ul>
      <h3>Split Phase</h3>
      <ul>
        <li>
          <RoleEmbed role="Pwr Boon" profession="chronomancer" /> subgroup goes
          to the <MiscEmbed id="retaliation" /> Pyre to strip that boon and can{" "}
          <GW2Skill id="10197" /> back to the middle.
        </li>
        <li>
          <RoleEmbed role="Kite" profession="deadeye" /> and subgroup goes to
          the <MiscEmbed id="protection" /> Pyre.
        </li>
      </ul>
      <h3>Fighting Qadim</h3>
      <ul>
        <li>
          We don't need to CC thanks to{" "}
          <RoleEmbed role="Heal" profession="tempest" /> using{" "}
          <GW2Skill id="29968" /> (also why we skip <MiscEmbed id="stability" />{" "}
          Pyre.)
        </li>
        <li>
          <RoleEmbed role="Pwr Boon" profession="chronomancer" /> should{" "}
          <GW2Skill id="10186" /> together the elementals when they all are in
          range.
        </li>
        <li>
          {" "}
          <RoleEmbed role="Pwr" profession="daredevil" /> can help with{" "}
          <CustomGW2Skill
            id="throw-magnetic-bomb"
            label="Throw Magnetic Bomb"
            wikiLink="https://wiki.guildwars2.com/wiki/Throw_Magnetic_Bomb"
          />
        </li>
        <li>Everyone should help cleave down the elementals quickly.</li>
        <li>
          If you fall from the platform don’t panic, you get pushed back up,
          just glide back to the group.
        </li>
      </ul>
      <h3>Final Phase</h3>
      <ul>
        <li>
          <RoleEmbed role="Pwr Boon" profession="chronomancer" /> portal to the
          first Pyre at the end to avoid jumping puzzle.
        </li>
      </ul>
    </div>
  );
}

export default QadimNotes;
