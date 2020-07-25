import React from 'react';
import { Row, Col } from "react-bootstrap";

import './Subgroup.css';
import { ISubgroup } from '../../utilities/Interfaces';

import Member from '../Member/Member'

function Subgroup(props: ISubgroup) {
  return (
    <Row className="subgroup">
      <Col xs={4} className="subgroup-label">{props.label}</Col>
      <Col className="align-items-end members">
        {
          props.members.map(member => (
            <Member {...member} key={member.name} />
          ))
        }
      </Col>
    </Row>
  )
}

export default Subgroup;