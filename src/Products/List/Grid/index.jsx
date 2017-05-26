import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Wrapper from './styled';
import Card from './Card';

const CardColumn = ({ children }) => (
  <Col xs={12} sm={6} md={4}>
    {children}
  </Col>
);

export default () => (
  <Wrapper>
    <Row>
      <CardColumn>
        <Card to="/products/football/shoes/1" isSale />
      </CardColumn>
      <CardColumn>
        <Card to="/products/football/shoes/1" />
      </CardColumn>
      <CardColumn>
        <Card to="/products/football/shoes/2" />
      </CardColumn>
      <CardColumn>
        <Card to="/products/football/shoes/3" />
      </CardColumn>
      <CardColumn>
        <Card to="/products/football/shoes/4" />
      </CardColumn>
      <CardColumn>
        <Card to="/products/football/shoes/5" />
      </CardColumn>
      <CardColumn>
        <Card to="/products/football/shoes/6" />
      </CardColumn>
      <CardColumn>
        <Card to="/products/football/shoes/7" />
      </CardColumn>
      <CardColumn>
        <Card to="/products/football/shoes/8" />
      </CardColumn>
      <CardColumn>
        <Card to="/products/football/shoes/9" />
      </CardColumn>
      <CardColumn>
        <Card to="/products/football/shoes/10" />
      </CardColumn>
    </Row>
  </Wrapper>
);
