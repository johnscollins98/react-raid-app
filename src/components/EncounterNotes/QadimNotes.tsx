import React from "react";

import RoleEmbed from "../RoleEmbed/RoleEmbed";
import GW2Skill from "../GW2Skill/GW2Skill";
import BoonEmbed from "../BoonEmbed/BoonEmbed";

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
          <BoonEmbed id="stability" /> Pyre and ignore CCs cause of{" "}
          <GW2Skill id="29968" />.
        </li>
        <li>
          <RoleEmbed role="Pwr Boon" profession="chronomancer" /> always goes to{" "}
          <BoonEmbed id="retaliation" /> Pyre to strip that boon and can Portal
          back to mid.
        </li>
        <li>
          <RoleEmbed role="Kite" profession="deadeye" /> always to{" "}
          <BoonEmbed id="protection" /> one (2nd time we get to them he won’t
          have a platform to go to the other anyways).
        </li>
        <li>
          <RoleEmbed role="Pwr Boon" profession="chronomancer" /> should{" "}
          <GW2Skill id="10186" /> together the approaching Elementals when they
          all are in range, <RoleEmbed role="Pwr" profession="daredevil" /> can
          help with their magnetic bomb and everyone should be ready to cleave
          fast.
        </li>
      </ul>
    </div>
  );
}

export default QadimNotes;
