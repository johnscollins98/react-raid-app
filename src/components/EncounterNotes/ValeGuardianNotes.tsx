import React from "react";

import RoleEmbed from "../RoleEmbed/RoleEmbed";

function ValeGuardianNotes() {
  return (
    <div>
      <h3>General</h3>
      <ul>
        <li>
          <RoleEmbed role="Heal" profession="druid" /> tanks the boss in the
          middle.
        </li>
        <li>Be careful not to pull Seekers into the group.</li>
        <li>
          Avoid CC-ing seekers in general, it makes the{" "}
          <RoleEmbed role="Heal" profession="druid" />
          's job harder.
        </li>
      </ul>
      <h3>Split Phase</h3>
      <h5>Red Guardian</h5>
      <ul>
        <li>
          <RoleEmbed role="Cnd" profession="weaver" />
        </li>
        <li>
          <RoleEmbed role="Cnd" profession="firebrand" />
        </li>
        <li>
          <RoleEmbed role="Heal" profession="firebrand" />
        </li>
      </ul>
      <h5>Green Guardian (pull)</h5>
      <ul>
        <li>
          <RoleEmbed role="Heal" profession="druid" />
        </li>
      </ul>
      <h5>Blue Guardian</h5>
      <ul>
        <li>Everyone else.</li>
      </ul>
    </div>
  );
}

export default ValeGuardianNotes;
