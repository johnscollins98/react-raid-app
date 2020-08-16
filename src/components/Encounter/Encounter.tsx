import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Encounter.css";
import { IEncounter } from "../../utilities/Interfaces";
import NoteMap from "../../utilities/NoteMap";

import Subgroup from "../Subgroup/Subgroup";

function Encounter(props: IEncounter) {
  let bossImage = null; 
  try {
    bossImage = require(`../../assets/images/boss-images/${props.id}.png`);
  } catch (err) {
    console.log(`Failed to load image ${props.id}.png`);
  }

  return (
    <div className="encounter">
      <Container fluid>
        <Row>
          <Col lg>
            <Row className="align-items-center justify-content-center">
              <Col xs="auto">
                <img src={bossImage} alt={props.label} className="boss-image" />
              </Col>
              <Col xs="auto">
                <h1 className="boss-title">{props.label}</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                {props.subgroups.map((subgroup, i) => (
                  <div key={subgroup.label}>
                    <Subgroup {...subgroup} />
                    {props.subgroups[i + 1] != null ? (
                      <div className="rule" />
                    ) : null}
                  </div>
                ))}
              </Col>
            </Row>
          </Col>
          <Col lg>{NoteMap.get(props.id)}</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Encounter;
