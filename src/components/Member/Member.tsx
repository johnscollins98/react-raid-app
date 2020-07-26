import React from 'react';
import Col from 'react-bootstrap/Col';

import './Member.css';
import { IMember } from '../../utilities/Interfaces'

function Member(props: IMember) {
  const classImage = require(`../../assets/images/profession_icons/${props.profession}.png`);
  const roleLabel = `${props.role}`

  return (
      <Col xs={4} sm={2} className="member justify-content-center">
        <div className="text" title={roleLabel}>{roleLabel}</div>
        <img src={classImage} alt={props.profession} className="class-image" />
        <div className="text" title={props.name}>{props.name}</div>
      </Col>
  );
}

export default Member;
