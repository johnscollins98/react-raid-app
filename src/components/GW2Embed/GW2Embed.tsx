import React from "react";

import { IEmbedProps } from "../../utilities/Interfaces";

function GW2Embed(props: IEmbedProps) {
  return (
    <span
      data-armory-embed={props.type}
      data-armory-ids={`${props.id}`}
      data-armory-size="25"
      data-armory-inline-text="wiki"
    ></span>
  );
}

export default GW2Embed;
