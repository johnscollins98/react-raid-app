import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

import RoleEmbed from "../RoleEmbed/RoleEmbed";
import GW2Skill from "../GW2Skill/GW2Skill";
import MiscEmbed from "../MiscEmbed/MiscEmbed";
import CustomGW2Skill from "../CustomGW2Skill/CustomGW2Skill";

function DhuumNotes() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div>
      <h3>General</h3>
      <ul>
        <li>
          <RoleEmbed role="Cnd Boon" profession="firebrand" /> tanks.
        </li>
        <li>
          <RoleEmbed role="Cnd" profession="firebrand" />s precast{" "}
          <CustomGW2Skill
            id="stalwart-stand"
            label="Chapter 4: Stalwart Stand"
            wikiLink="https://wiki.guildwars2.com/wiki/Chapter_4:_Stalwart_Stand"
          />{" "}
          in <GW2Skill id="42259" /> for <MiscEmbed id="resistance" /> before{" "}
          splits.
        </li>
        <li>
          You should also jump into <GW2Skill id="41780" /> and can use{" "}
          <CustomGW2Skill
            id="radiant-recovery"
            label="Chapter 2: Radiant Recovery"
            wikiLink="https://wiki.guildwars2.com/wiki/Chapter_2:_Radiant_Recovery"
          />{" "}
          to provide condition cleanse to your subgroup.
        </li>
      </ul>
      <h3>Greens</h3>
      <ul>
        <li>G1 - Elosia</li>
        <li>G2 - Thillar</li>
        <li>G3 - CrackedSass</li>
        <li>Backup - Deekay</li>
        <li>
          <button onClick={handleShow} className="inline-text-button">
            Boss Timings
          </button>{" "}
        </li>
      </ul>
      <Modal show={showModal} onHide={handleClose} centered>
        <img
          width="100%"
          src={require("../../assets/images/dhuum-timer.png")}
          alt="Cairn"
        />
      </Modal>
    </div>
  );
}

export default DhuumNotes;
