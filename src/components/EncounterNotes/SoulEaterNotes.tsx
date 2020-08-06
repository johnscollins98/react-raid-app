import React from "react";

import RoleEmbed from "../RoleEmbed/RoleEmbed";

function SoulEaterNotes() {
  return (
    <div>
      <h3>General</h3>
      <ul>
        <li>
          <RoleEmbed role="Heal" profession="firebrand" /> tanks.
        </li>
        <li>
          We go 0-5. This means we kill once and send nobody up, kill again and
          send 5 people up.
        </li>
        <li>
          All of subgroup 1 will go up to collect,{" "}
          <RoleEmbed role="Pwr Boon" profession="chronomancer" /> will sacrifice
          himself to skip the CC phase.
        </li>
        <li>
          Be careful for his vomit attack. You'll know he's about to do it if he
          turns away from the tank and phases the group.
        </li>
        <li>Also watch out for the spirit's shockwave.</li>
      </ul>
    </div>
  );
}

export default SoulEaterNotes;
