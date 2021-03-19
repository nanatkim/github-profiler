import React from 'react';

import { Container, Row, Col } from './styles';

const LanguagesInfo: React.FC = () => {
  return(
    <Container>
      <Row>
        <Col size={2}>javascript</Col>
        <Col size={1}>33%</Col>
      </Row>
      <Row>
        <Col size={2}>typescript</Col>
        <Col size={1}>30%</Col>
      </Row>
      <Row>
        <Col size={2}>python</Col>
        <Col size={1}>27%</Col>
      </Row>
      <Row>
        <Col size={2}>ruby on rails</Col>
        <Col size={1}>10%</Col>
      </Row>
    </Container>
  );
}

export default LanguagesInfo;