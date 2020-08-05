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

  const logoGif = require("../../assets/images/SO-Logo.gif")

  return (
    <div className="fill">
      <div className="background" style={{ backgroundImage: `url(${require("../../assets/images/backgrounds/desert.jpg")})` }} />
      <Container fluid className="fill">
        <Row className="align-items-center fill">
          <Col className="justify-content-center">
            <img src={logoGif} className="logo" alt="logo" />
            <h1>Sunspear Order</h1>
            {alertMessage(props.errorMessage)}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomePage;