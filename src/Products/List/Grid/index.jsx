/* eslint-disable react/prop-types */

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
        <Card isSale />
      </CardColumn>
      <CardColumn>
        <Card />
      </CardColumn>
      <CardColumn>
        <Card />
      </CardColumn>
      <CardColumn>
        <Card />
      </CardColumn>
      <CardColumn>
        <Card />
      </CardColumn>
      <CardColumn>
        <Card />
      </CardColumn>
      <CardColumn>
        <Card />
      </CardColumn>
      <CardColumn>
        <Card />
      </CardColumn>
      <CardColumn>
        <Card />
      </CardColumn>
      <CardColumn>
        <Card />
      </CardColumn>
      <CardColumn>
        <Card />
      </CardColumn>
    </Row>
  </Wrapper>
);
