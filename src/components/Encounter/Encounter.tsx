import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Encounter.css';
import { IEncounter } from '../../utilities/Interfaces';
import NoteMap from '../../utilities/NoteMap';

import Subgroup from '../Subgroup/Subgroup';

function Encounter(props: IEncounter) {
  const bossImage = require(`../../assets/images/boss-images/${props.imageName}`);

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://unpkg.com/armory-embeds@^0.x.x/armory-embeds.js";
    script.async = true;

    document.body.appendChild(script);
  });

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
                {
                  props.composition.map((subgroup, i) => (
                    <div key={subgroup.label}>
                      <Subgroup {...subgroup} />
                      {(props.composition[i + 1] != null) ? <div className="rule" /> : null}
                    </div>
                  ))
                }
              </Col>
            </Row>
          </Col>
          <Col lg>
            {NoteMap.get(props.id)}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Encounter;