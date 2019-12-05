import React from 'react';
import { Container, Row, Col } from '../../src';

export default {
  title: 'Grid',
};

export const alwaysFiftyFifty = () => (
  <Container>
    <Row>
      <Col xs={6} style={{backgroundColor: '#eeeeee'}}>Hello</Col>
      <Col xs={6} style={{backgroundColor: '#dddddd'}}>World</Col>
    </Row>
  </Container>
);

export const allBreakpoints = () => (
  <Container>
    <Row>
      <Col xs={4} sm={6} md={8} lg={10} xl={12} style={{backgroundColor: '#eeeeee'}}>
        Resize your windows to see changes
      </Col>
    </Row>
    <Row>
      <Col xs={4} style={{backgroundColor: '#dddddd'}}>4</Col>
      <Col xs={4} style={{backgroundColor: '#cccccc'}}>4</Col>
      <Col xs={4} style={{backgroundColor: '#dddddd'}}>4</Col>
    </Row>
  </Container>
);

export const offset = () => (
  <Container>
    <Row>
      <Col sm={6} offsetSm={3} style={{backgroundColor: '#eeeeee'}}>
        Nice
      </Col>
    </Row>
    <Row>
      <Col sm={3} style={{backgroundColor: '#dddddd'}}>3</Col>
      <Col sm={3} style={{backgroundColor: '#cccccc'}}>3</Col>
      <Col sm={3} style={{backgroundColor: '#dddddd'}}>3</Col>
      <Col sm={3} style={{backgroundColor: '#cccccc'}}>3</Col>
    </Row>
  </Container>
);

export const visibility = () => (
  <Container>
    <Row>
      <Col xs={12} style={{backgroundColor: '#eeeeee'}}>
        Always visible
      </Col>
      <Col xs={12} hideLg style={{backgroundColor: '#cccccc'}}>
        Hidden until lg
      </Col>
      <Col xs={12} hideMd style={{backgroundColor: '#eeeeee'}}>
        Hidden until md
      </Col>
      <Col xs={12} hideSm style={{backgroundColor: '#cccccc'}}>
        Hidden until sm
      </Col>
      <Col xs={12} hideXs style={{backgroundColor: '#eeeeee'}}>
        Hidden until xs
      </Col>
    </Row>
    <Row>
      <Col sm={3} style={{backgroundColor: '#dddddd'}}>3</Col>
      <Col sm={3} style={{backgroundColor: '#cccccc'}}>3</Col>
      <Col sm={3} style={{backgroundColor: '#dddddd'}}>3</Col>
      <Col sm={3} style={{backgroundColor: '#cccccc'}}>3</Col>
    </Row>
  </Container>
);
