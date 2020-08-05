import React from "react";

import RoleEmbed from "./../RoleEmbed/RoleEmbed";

function SabethaNotes() {
  return (
    <div>
      <h3>General</h3>
      <ul>
        <li>
          <RoleEmbed role="Heal" profession="druid" /> kites.
        </li>
      </ul>
      <h3>Cannons</h3>
      <ul>
        <li>
          <RoleEmbed role="Banner" profession="berserker" /> does 1-3.
        </li>
        <li>
          One of the <RoleEmbed role="Cnd Boon" profession="renegade" />s does
          2-4.
        </li>
      </ul>
    </div>
  );
}

export default SabethaNotes;
