import React from "react";
import { Gw2Trait, Tooltip } from 'armory-component-ui';

import { ITraitProps } from "../../utilities/Interfaces";

function GW2Trait(props: ITraitProps) {
  return (
    <span>
      <Gw2Trait id={props.id} inlineText="wiki" size="25" />
      <Tooltip />
    </span>
  )
}

export default GW2Trait;
