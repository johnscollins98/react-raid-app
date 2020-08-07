import React, { useState } from "react";
import ModalVideo from "react-modal-video"

import RoleEmbed from "../RoleEmbed/RoleEmbed";
import GW2Skill from "../GW2Skill/GW2Skill";
import BoonEmbed from "../BoonEmbed/BoonEmbed";

function TwistedCastleNotes() {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div>
      <h3>General</h3>
      <ul>
        <li>
          Everyone should learn where all buttons are - watch{" "}
          <button className="inline-text-button" onClick={handleShow}>this video</button>.
        </li>
        <li>
          <RoleEmbed role="Heal" profession="firebrand" /> try as much as you
          can to provide <BoonEmbed id="stability" /> and pull mobs.
        </li>
        <li>
          If the <RoleEmbed role="Portal" profession="chronomancer" /> fails the
          dodge jump, we all need to do it.
        </li>
        <li>Remember that you actually need to kill adds to progress.</li>
      </ul>
      <h3>Jobs</h3>
      <ul>
        <li>
          <RoleEmbed role="Heal" profession="druid" /> Skip Button, Fountain
          Button, Statues Button.
        </li>
        <li>
          <RoleEmbed role="Banner" profession="berserker" /> Far Button after
          portal (can do Fountain Button if needed/wanted).
        </li>
        <li>
          At least one <RoleEmbed role="" profession="chronomancer" /> should
          bring <GW2Skill id="10197" /> for the dodge part.
        </li>
      </ul>
      <h3>Button Names (harcore CS:GO callouts)</h3>
      <ul>
        <li>Skip Button - the one that you do the skip for.</li>
        <li>
          Fountain button - next to the big fountain, go through the door by
          where the skip happens.
        </li>
        <li>
          Statue Button - run past some statues; go through the door by where we
          portal.
        </li>
        <li>
          "Far"/Elosia Button - after the portal it is far off to the left.
        </li>
        <li>
          Portal Button - the button immediately below where the button is
          placed.
        </li>
      </ul>
      <ModalVideo channel="youtube" isOpen={showModal} onClose={handleClose} videoId="vmHayhAe9UA" />
    </div>
  );
}

export default TwistedCastleNotes;
