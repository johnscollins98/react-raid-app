import React from "react";

import RoleEmbed from "../RoleEmbed/RoleEmbed";

function BanditTrioNotes() {
  return (
    <div>
      <h3>Initial Phase</h3>
      <ul>
        <li>Subgroup 1 defends at the bottom.</li>
        <li>Subgroup 2 stays up at the top.</li>
      </ul>
      <h3>Defence Phase</h3>
      <ul>
        <li>Subgroup 1 stays closer to Narella spawn.</li>
        <li>Subgroup 2 stays closer to Zane spawn.</li>
      </ul>
      <h3>Individual Jobs</h3>
      <ul>
        <li>
          <RoleEmbed role="Pwr" profession="renegade" /> Mortars + Top Wargs.
        </li>
        <li>
          <RoleEmbed role="Pwr Banner" profession="berserker" /> Saboteurs.
        </li>
        <li>
          <RoleEmbed role="Heal" profession="firebrand" /> Beehives + Bottom
          Wargs.
        </li>
        <li>
          <RoleEmbed role="Pwr" profession="dragonhunter" /> Keg Throwing.
        </li>
      </ul>
      <h3>Spawn Times</h3>
      <ul>
        <li>Berg - 6:55</li>
        <li>Zane - 4:55</li>
        <li>Narella - 2:47</li>
      </ul>
    </div>
  );
}

export default BanditTrioNotes;
