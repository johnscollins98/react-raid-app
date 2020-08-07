import React from "react";

import RoleEmbed from "../RoleEmbed/RoleEmbed";
import GW2Skill from "../GW2Skill/GW2Skill";

function StatueOfDarknessNotes() {
  return (
    <div>
      <h3>Portal Strat</h3>
      <ul>
        <li>Mark north Eye at least because it’ll move.</li>
        <li>
          Start north. <RoleEmbed role="Heal" profession="firebrand" />,{" "}
          <RoleEmbed role="Pwr Boon" profession="chronomancer" /> and a DPS up
          on the orbs to throw all 3 together.
        </li>
        <li>
          <RoleEmbed role="Heal" profession="firebrand" /> stays up all time to
          keep throwing just in case.
        </li>
        <li>
          <RoleEmbed role="Heal" profession="druid" /> uses orbs.
        </li>
        <li>
          <RoleEmbed role="Pwr Boon" profession="chronomancer" /> places a{" "}
          <GW2Skill id="10197" /> close to the south side AFTER we are in combat
          (or will disappear), then takes his orb and goes down with the others.{" "}
        </li>
        <li>
          When north Eye is around 10%,{" "}
          <RoleEmbed role="Pwr Boon" profession="chronomancer" /> mimics the{" "}
          <GW2Skill id="10199" /> and as soon as it’s dead everyone takes it and
          moves to south Eye.
          <li>
            Ideally the <RoleEmbed role="Pwr Boon" profession="chronomancer" />{" "}
            and DPS as before take an orb before following.{" "}
          </li>
          <li>
            <RoleEmbed role="Pwr Boon" profession="chronomancer" /> places a{" "}
            <GW2Skill id="10197" /> close to the north side before joining the
            others.
          </li>
        </li>
        <li>
          When south is about to die, open the <GW2Skill id="10199" /> again and
          everyone goes back to the north Eye (will have some HP regenerated but
          it’s fine, 1 orb and it’ll die).
        </li>
        <li>
          Need to be fast and make sure Eyes won’t port during dps or we will
          die.
        </li>
      </ul>
    </div>
  );
}

export default StatueOfDarknessNotes;
