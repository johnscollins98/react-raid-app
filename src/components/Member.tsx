import React from 'react';
import { Col } from 'react-bootstrap';

import './Member.css';
import { IMember } from '../utilities/Interfaces'

function capitaliseFirstLetter(str: string) : string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function Member(props: IMember) {
  const classImage = require(`../assets/images/profession_icons/${props.profession}.png`);
  const roleLabel = `${props.role} ${capitaliseFirstLetter(props.profession)}`

  return (
    <Col className="member">
      <div className="role">{roleLabel}</div>
      <img src={classImage} alt={props.profession} className="class-image"/>
      <div className="member-name">{props.name}</div>
    </Col>
  );
}

export default Member;
