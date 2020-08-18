import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { IYouTubeModalProps } from "../../utilities/Interfaces";

const YouTubeModal = (props: IYouTubeModalProps) => {
  const [showModal, setModal] = useState(false);

  return (
    <span>
      <button className="inline-text-button" onClick={() => setModal(true)}>
        {props.label}
      </button>
      <ModalVideo
        channel="youtube"
        isOpen={showModal}
        onClose={() => setModal(false)}
        videoId={props.id}
      />
    </span>
  );
};

export default YouTubeModal;
