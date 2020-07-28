import React from 'react';

import './RoleEmbed.css';
import { IRoleEmbedProps } from '../../utilities/Interfaces'; 

function RoleEmbed(props: IRoleEmbedProps) {
  const image = require(`../../assets/images/profession_icons/${props.profession}.png`)
  return (<span className="role-embed">
    <img src={image} height="20px" width="20px" alt={props.profession}/>
    {` ${props.role} ${props.profession[0].toUpperCase() + props.profession.slice(1)}`}
  </span>)
}

export default RoleEmbed;