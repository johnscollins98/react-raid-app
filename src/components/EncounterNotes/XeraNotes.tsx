import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import ModalVideo from 'react-modal-video';

function XeraNotes() {
  const [showImage, setShowImage] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handleCloseVideo = () => setShowVideo(false);
  const handleShowVideo = () => setShowVideo(true);

  const handleCloseImage = () => setShowImage(false);
  const handleShowImage = () => setShowImage(true);

  return (
    <div>
      <h3>Pre-phase</h3>
      <ul>
        <li>Subgroup 1 goes left.</li>
        <li>Subgroup 2 goes right.</li>
      </ul>
      <h3>Tanking</h3>
      <ul>
        <li>Guide <button className="inline-text-button" onClick={handleShowVideo}>here.</button></li>
        <li>Image <button className="inline-text-button" onClick={handleShowImage}>here.</button></li>
        <li>Phase One
          <ul>
            <li>Arrow until special action key.</li>
            <li>Circle (Don't stand on square side) until 50%.</li>
          </ul>
        </li>
        <li>Phase Two (steps after Star are only necessary if DPS isn't high enough)
          <ul>
            <li>Circle until special action key.</li>
            <li>Star until orbs end. (Can stay here if DPS is high enough)</li>
            <li>Middle until special action key (Clear Square if needed)</li>
            <li>Square until dead. Pls be dead.</li>
          </ul>
        </li>
      </ul>
      <Modal show={showImage} onHide={handleCloseImage} centered>
        <img width="100%" src={require("../../assets/images/xera-tank.png")} alt="Cairn" />
      </Modal>
      <ModalVideo channel="youtube" isOpen={showVideo} onClose={handleCloseVideo} videoId="f8ntQA2DOlY" />
    </div>
  )
}

export default XeraNotes;