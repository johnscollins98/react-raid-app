import React from "react";

import RoleEmbed from "../RoleEmbed/RoleEmbed";
import GW2Skill from "../GW2Skill/GW2Skill";
import MiscEmbed from "../MiscEmbed/MiscEmbed";

function EscortNotes() {
  return (
    <div>
      <h3>Jobs</h3>
      <ul>
        <li>
          <RoleEmbed role="Banner" profession="berserker" /> does backwargs (can
          head back after 3rd one).
        </li>
        <li>
          <RoleEmbed role="Tower" profession="chronomancer" />{" "}
          <GW2Skill id="10197" /> for:
          <ul>
            <li>Tower 1</li>
            <li>Tower 2</li>
            <li>Tower 4</li>
            <li>Tower 5</li>
          </ul>
        </li>
        <li>
          <RoleEmbed role="Pwr" profession="chronomancer" />{" "}
          <GW2Skill id="10197" /> for Tower 3 as{" "}
          <RoleEmbed role="Tower" profession="chronomancer" /> will have
          cooldowns.
        </li>
        <li>
          <RoleEmbed role="Heal" profession="firebrand" /> escorts Glenna,
          provides <MiscEmbed id="stability" /> for portals and{" "}
          <GW2Skill id="9091" /> right after taking the portal.
        </li>
        <li>
          <RoleEmbed role="Heal" profession="druid" /> uses{" "}
          <GW2Skill id="12580" /> on wargs during final fight.
        </li>
      </ul>
    </div>
  );
}

export default EscortNotes;
