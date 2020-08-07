import React from "react";

import "./MiscEmbed.css";
import { IMiscEmbedProps } from "../../utilities/Interfaces";

function MiscEmbed(props: IMiscEmbedProps) {
  const image = require(`../../assets/images/misc-icons/${props.id}.png`);
  return (
    <span className="boon-embed">
      <img src={image} height="20px" width="20px" alt={props.id} />
      {` ${props.id[0].toUpperCase() + props.id.slice(1)}`}
    </span>
  );
}

export default MiscEmbed;
