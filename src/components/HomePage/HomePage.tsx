import React from "react";
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './HomePage.css';
import { IHomeProps } from "../../utilities/Interfaces";

function HomePage(props: IHomeProps) {
  const alertMessage = (message: string) => {
    if (message) {
      return <Alert variant="danger">{message}</Alert>
    }
  }

  const logoGif = require("../../assets/images/SO_Logo.gif")

  return (
    <Container fluid>
      <Row>
        <img src={logoGif} width="100px" height="100px" className="logo" alt="logo" />
      </Row>
      <Row>
        <Col>
          <h1>Sunspear Order</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          {alertMessage(props.errorMessage)}
        </Col>
      </Row>
    </Container>
  )
}

export default HomePage;