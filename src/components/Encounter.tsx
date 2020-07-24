import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { useParams } from 'react-router-dom';

import './Encounter.css';

import Subgroup from './Subgroup';
import Note from './Note';
import { IEncounter } from '../utilities/Interfaces';

function Encounter(props:IEncounter) {
  const bossImage = require(`../assets/images/boss_images/${props.imageName}`);

  return (
    <div className="encounter">
      <Container fluid>
        <Row>
          <Col lg>
            <div className="boss-header">
              <img src={bossImage} alt={props.label} className="boss-image" />
              <h1 className="boss-title">{props.label}</h1>
            </div>
            <div className="composition">
              {
                props.composition.map((subgroup, i) => (
                  <div key={subgroup.label}>
                    <Subgroup {...subgroup} />
                    {(props.composition[i+1] != null) ? <div className="rule" /> : null}
                  </div>
                ))
              }
            </div>
          </Col>
          <Col lg>
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