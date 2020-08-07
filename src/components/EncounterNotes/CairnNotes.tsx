import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

import RoleEmbed from "../RoleEmbed/RoleEmbed";
import GW2Skill from "../GW2Skill/GW2Skill";
import BoonEmbed from "../BoonEmbed/BoonEmbed";
import CustomGW2Skill from "../CustomGW2Skill/CustomGW2Skill";

function CairnNotes() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div>
      <h3>Greens</h3>
      <ul>
        <li>
          We don't do <strong>any</strong> greens.
        </li>
        <li>
          <RoleEmbed role="Heal" profession="firebrand" /> should use{" "}
          <GW2Skill id="9153" /> for most greens to provide{" "}
          <BoonEmbed id="stability" /> to the squad.
        </li>
        <li>
          If <GW2Skill id="9153" /> is unavailable. A{" "}
          <RoleEmbed role="" profession="firebrand" /> in each subgroup. Should
          use{" "}
          <CustomGW2Skill
            id="unflinching-charge"
            label="Chapter 1: Unflinching Charge"
            wikiLink="https://wiki.guildwars2.com/wiki/Chapter_1:_Unflinching_Charge"
          />{" "}
          in <GW2Skill id="42259" /> to provide <BoonEmbed id="stability" /> to
          their subgroup.
          <ul>
            <li>This should only be relevant towards the end of the fight.</li>
          </ul>
        </li>
      </ul>
      <h3>Agony (Reds)</h3>
      <ul>
        <li>
          Support players should try to bait <GW2Skill id="38210" />.
        </li>
        <li>
          <button onClick={handleShow} className="inline-text-button">
            Click Here
          </button>{" "}
          to show a good spot to stand to bait agony as you are far from the
          group but you also don't get hit by <GW2Skill id="38313" />{" "}
          (projectiles).
        </li>
      </ul>
      <Modal show={showModal} onHide={handleClose} centered>
        <img
          width="100%"
          src={require("../../assets/images/cairn-image.png")}
          alt="Cairn"
        />
      </Modal>
    </div>
  );
}

export default CairnNotes;
