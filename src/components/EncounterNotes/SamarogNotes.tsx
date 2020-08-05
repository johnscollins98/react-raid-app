import React from "react";

import RoleEmbed from "./../RoleEmbed/RoleEmbed";
import GW2Skill from "./../GW2Skill/GW2Skill";

function SamarogNotes() {
  return (
    <div>
      <h3>
        <strong>Quick</strong> CC!
      </h3>
      <ul>
        <li>
          <RoleEmbed role="Pwr" profession="holosmith" /> please delay{" "}
          <GW2Skill id="5813" /> and precast just before the CC.
        </li>
        <li>
          <RoleEmbed role="Pwr" profession="dragonhunter" /> should save{" "}
          <GW2Skill id="9093" /> and <GW2Skill id="30273" /> for CC.
        </li>
        <li>
          <RoleEmbed role="Pwr" profession="daredevil" /> should use{" "}
          <GW2Skill id="13132" /> and <GW2Skill id="49112" />
        </li>
      </ul>
    </div>
  );
}

export default SamarogNotes;
