import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Subgroup.css";
import { ISubgroup } from "../../utilities/Interfaces";

import Member from "../Member/Member";

function Subgroup(props: ISubgroup) {
  return (
    <div>
      <Row className="align-items-center justify-items-center subgroup">
        <Col sm={3} className="subgroup-label">
          {props.label}
        </Col>
        <Col sm={9} className="members">
          <Row className="justify-content-center align-items-end">
            {props.members.map((member) => (
              <Member {...member} key={member.name} />
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Subgroup;
