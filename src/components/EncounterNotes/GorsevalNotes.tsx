import React from 'react';

import RoleEmbed from '../RoleEmbed/RoleEmbed';
import GW2Skill from '../GW2Skill/GW2Skill';
/**
 * 
"notes": [
          {
            "heading": "General",
            "notes": [
              "<ul>",
                "<li><RoleEmbed role=\"Cnd QB\" profession=\"firebrand\"></RoleEmbed> tanks the boss.</li>",
                "<li>",
                  "<RoleEmbed role=\"Cnd QB\" profession=\"firebrand\"></RoleEmbed> takes ",
                  "<GW2Skill id=\"9153\"></GW2Skill>",
                  " to provide stability to the squad for slams.",
                "</li>",
                "<li>",
                  "<RoleEmbed role=\"Pwr Boon\" profession=\"chronomancer\"></RoleEmbed> remember to pull adds ",
                  " with <GW2Skill id=\"10186\"></GW2Skill>.",
                "</li>",
                "<li><strong>Quick</strong> CC:</li>",
                "<ul>",
                  "<li>",
                    "<RoleEmbed role=\"Pwr\" profession=\"holosmith\"></RoleEmbed> please delay ",
                    "<GW2Skill id=\"5813\"></GW2Skill>",
                    " and precast just before the CC phase.",
                  "</li>",
                  "<li>",
                    "<RoleEmbed role=\"Pwr\" profession=\"dragonhunter\"></RoleEmbed> please save",
                    "<GW2Skill id=\"30273\"></GW2Skill>",
                    " and ",
                    "<GW2Skill id=\"9093\"></GW2Skill>",
                    " for CC.",
                  "</li>",
                "</ul>",
                "<li>",
                  "<RoleEmbed role=\"Power Banner\" profession=\"berserker\"></RoleEmbed> be careful not to rip stability with ",
                  "<GW2Skill id=\"30343\" />",
                  ".",
                "</li>",
              "</ul>"
            ]
          },
          {
            "heading": "Split Phase",
            "notes": [
              "<ul>",
                "<li>Subgroup 1 goes left (to Arrow)</li>",
                "<li>Subgroup 2 goes right (to Circle)</li>",
              "</ul>"
            ]
          }
        ]
 */

function GorsevalNotes() {
  return (
    <div>
      <h3>General</h3>
      <ul>
        <li><RoleEmbed role="Cnd QB" profession="firebrand" /> tanks the boss.</li>
        <li>
          <RoleEmbed role="Cnd QB" profession="firebrand" /> take <GW2Skill id="9153" /> to provide
          stability for <GW2Skill id="31875" />
        </li>
        <li>
          <RoleEmbed role="Pwr Boon" profession="chronomancer" /> pull adds with <GW2Skill id="10186" />
        </li>
        <li>
          <RoleEmbed role="Pwr" profession="dragonhunter" /> deal with Orbs with scepter.
          It shouldn't require too much attention.
        </li>
        <li>
          <RoleEmbed role="Pwr Banner" profession="berserker" /> remember that <GW2Skill id="30343" /> strips
          stability.
        </li>
      </ul>
      <h3>
        <strong>Quick</strong> CC!
      </h3>
      <ul>
        <li>
          <RoleEmbed role="Pwr" profession="holosmith" /> please delay <GW2Skill id="5813" /> and
           precast just before the CC phase.
        </li>
        <li>
          <RoleEmbed role="Pwr" profession="dragonhunter" /> should
          save <GW2Skill id="9093" /> and <GW2Skill id="30273" /> for CC.
        </li>
      </ul>
      <h3>Split Phase</h3>
      <ul>
        <li>Subgroup 1 goes left (Arrow)</li>
        <li>Subgroup 2 goes right (Circle)</li>
      </ul>
    </div >
  )
}

export default GorsevalNotes;