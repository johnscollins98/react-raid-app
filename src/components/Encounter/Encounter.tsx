import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Encounter.css';

import Subgroup from '../Subgroup/Subgroup';
import Note from '../Note/Note';
import { IEncounter } from '../../utilities/Interfaces';

function Encounter(props: IEncounter) {
  const bossImage = require(`../../assets/images/boss_images/${props.imageName}`);

  return (
    <div className="encounter">
      <Container fluid>
        <Row>
          <Col lg={8}>
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
          <Col lg={4}>
            <div className="raid-notes">
              {
                props.notes.map((note) => (
                  <Note {...note} key={`${props.label}-${note.heading}`} />
                ))
              }
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Encounter;