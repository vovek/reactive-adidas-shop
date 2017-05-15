/* eslint-disable react/prop-types */

import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import Card from './Card';

const CardColumn = ({ children }) => (
  <Col xs={12} sm={6} md={4} lg={3}>
    {children}
  </Col>
);

const Wrapper = styled.div`
  padding: 0.75rem 0.8rem;
  margin-left: auto;
  margin-right: auto;
`;

export default () => (
  <Wrapper>
    <Row>
      <CardColumn>
        <Card onSale />
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
