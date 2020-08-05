import React from 'react';

import './BoonEmbed.css';
import { IBoonEmbedProps } from '../../utilities/Interfaces'; 

function BoonEmbed(props: IBoonEmbedProps) {
  const image = require(`../../assets/images/boon-icons/${props.id}.png`)
  return (<span className="boon-embed">
    <img src={image} height="20px" width="20px" alt={props.id}/>
    {` ${props.id[0].toUpperCase() + props.id.slice(1)}`}
  </span>)
}

export default BoonEmbed;