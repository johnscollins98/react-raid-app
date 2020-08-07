import React from "react";

import RoleEmbed from "../RoleEmbed/RoleEmbed";
import GW2Skill from "../GW2Skill/GW2Skill";
import MiscEmbed from "../MiscEmbed/MiscEmbed";

function QadimNotes() {
  return (
    <div>
      <h3>General</h3>
      <ul>
        <li>
          Anyone can tank this boss,{" "}
          <RoleEmbed role="Heal" profession="tempest" /> do it if others are not
          confident, but then <RoleEmbed role="Kite" profession="deadeye" />{" "}
          needs to be sure he can handle things alone and we can’t allow Qadim
          to get any stacks.
        </li>
        <li>
          With <RoleEmbed role="Heal" profession="tempest" /> we can skip{" "}
          <MiscEmbed id="stability" /> Pyre and ignore CCs cause of{" "}
          <GW2Skill id="29968" />.
        </li>
        <li>
          <RoleEmbed role="Pwr Boon" profession="chronomancer" /> always goes to{" "}
          <MiscEmbed id="retaliation" /> Pyre to strip that boon and can Portal
          back to mid.
        </li>
        <li>
          <RoleEmbed role="Kite" profession="deadeye" /> always to{" "}
          <MiscEmbed id="protection" /> one (2nd time we get to them he won’t
          have a platform to go to the other anyways).
        </li>
        <li>
          <RoleEmbed role="Pwr Boon" profession="chronomancer" /> should{" "}
          <GW2Skill id="10186" /> together the approaching Elementals when they
          all are in range, <RoleEmbed role="Pwr" profession="daredevil" /> can
          help with their magnetic bomb and everyone should be ready to cleave
          fast.
        </li>
        <li>
          2nd Legendary: start all packed, be ready to CC and kill the 3 adds.
        </li>
        <li>
          All DPS and <RoleEmbed role="Heal" profession="druid" /> go into the
          last lamp, <RoleEmbed role="Pwr Boon" profession="chronomancer" />{" "}
          tanks Pat, <RoleEmbed role="Heal" profession="tempest" /> tanks Mat;
          CC Pat before opening the lamp.
        </li>
        <li>
          <RoleEmbed role="Pwr Boon" profession="chronomancer" /> portal to the
          first Pyre at the end to avoid jp.
        </li>
        <li>
          If you fall from the platform don’t panic, you get pushed back up,
          just glide back to the group.
        </li>
      </ul>
    </div>
  );
}

export default QadimNotes;
