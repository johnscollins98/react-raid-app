import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

import RoleEmbed from "../RoleEmbed/RoleEmbed";

function QadimPNotes() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div>
      <h3>General</h3>
      <ul>
        <li>
          <RoleEmbed role="Heal" profession="firebrand" /> tanks the boss.
        </li>
        <li>
          <RoleEmbed role="" profession="chronomancer" />s and{" "}
          <RoleEmbed role="" profession="renegade" />s be ready for boon rip in
          the last phase.
        </li>
        <li>
          <RoleEmbed role="Heal" profession="druid" /> can deal with anomalies.
        </li>
      </ul>
      <h3>Pylons</h3>
      <ul>
        <li>
          Look at{" "}
          <button className="inline-text-button" onClick={handleShow}>
            this image.
          </button>
        </li>
        <li>
          North Pylon:
          <ul>
            <li>80%: Heart</li>
            <li>60%: Square</li>
          </ul>
        </li>
        <li>
          East Pylon:
          <ul>
            <li>80%: Circle</li>
            <li>60%: Spiral</li>
          </ul>
        </li>
        <li>
          West Pylon:
          <ul>
            <li>80%: Arrow</li>
            <li>60%: Star</li>
          </ul>
        </li>
      </ul>
      <Modal show={showModal} onHide={handleClose} centered>
        <img
          width="100%"
          src={require("../../assets/images/qadimp-image.jpg")}
          alt="Cairn"
        />
      </Modal>
    </div>
  );
}

export default QadimPNotes;
