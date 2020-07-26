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
        <Col className="justify-content-center align-items-center">
          <img src={logoGif} className="logo" alt="logo" />
          <h1>Sunspear Order</h1>
          {alertMessage(props.errorMessage)}
        </Col>
      </Row>
    </Container>
  )
}

export default HomePage;