import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

import { IImageModalProps } from "../../utilities/Interfaces";

const ImageModal = (props: IImageModalProps) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <span>
      <button className="inline-text-button" onClick={() => setShowModal(true)}>
        {props.label}
      </button>
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <img width="100%" src={props.imageLink} alt={props.alt} />
      </Modal>
    </span>
  );
};

export default ImageModal;
