import React from "react";

import RoleEmbed from "../RoleEmbed/RoleEmbed";
import GW2Skill from "../GW2Skill/GW2Skill";

function TwinLargosNotes() {
  return (
    <div>
      <h3>General</h3>
      <ul>
        <li>
          <RoleEmbed role="Heal" profession="druid" /> should take Smokescale
          for this encounter (if any{" "}
          <RoleEmbed role="Cnd" profession="mirage" />s are present).
        </li>
        <li>
          <RoleEmbed role="Pwr" profession="renegade" /> should take{" "}
          <GW2Skill id="28494" /> for boonstrip.
        </li>
      </ul>
      <h3>Portal Strat</h3>
      <ul>
        <li>
          <RoleEmbed role="Heal" profession="firebrand" /> tanks.
        </li>
        <li>Entire group fights Nikare, Kenut as usual.</li>
        <li>
          Entire group goes right to fight Kenut while Chrono goes left to place{" "}
          <GW2Skill id="10197" />.
        </li>
        <li>
          Use a <GW2Skill id="10199" /> to then fight Nikare on the left.
        </li>
        <li>
          After Nikare we then make our own way over to Kenut.{" "}
          <strong>DO NOT LAND ON NIKARE'S PLATFORM</strong>.
        </li>
        <li>
          After we kill Kenut, make our own way back to Nikare. He will be
          enraged at this point so let the tank go first and be sure to stand
          behind him, avoid his <GW2Skill id="52876" /> at all costs).
        </li>
        <li>
          <RoleEmbed role="Heal" profession="druid" /> will bait Kenut's{" "}
          <GW2Skill id="51965" />.{" "}
          <RoleEmbed role="Pwr" profession="renegade" /> be ready to boon rip if
          she gets any.
        </li>
        <li>
          Be sure to place <GW2Skill id="52812" /> on the southmost side of
          Nikare's platforms.
        </li>
      </ul>
    </div>
  );
}

export default TwinLargosNotes;
