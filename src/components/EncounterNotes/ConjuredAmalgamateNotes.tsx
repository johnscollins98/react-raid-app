import React from "react";

import RoleEmbed from "../RoleEmbed/RoleEmbed";

function ConjuredAmalgamateNotes() {
  return (
    <div>
      <h3>General</h3>
      <ul>
        <li>
          Do not forget to cleave. If you pick up random swords, use 'em on the
          shields if they're spawning.
        </li>
      </ul>
      <h3>Jobs</h3>
      <ul>
        <li>
          Swords 1 - <RoleEmbed role="Pwr Boon" profession="chronomancer" />{" "}
          (Sass)
        </li>
        <li>
          Swords 2 - <RoleEmbed role="Heal" profession="druid" /> (Thillar)
        </li>
        <li>
          Shields - <RoleEmbed role="Heal" profession="firebrand" /> (Whiskers)
        </li>
      </ul>
    </div>
  );
}

export default ConjuredAmalgamateNotes;