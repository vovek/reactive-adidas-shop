/* eslint-disable react/prop-types */

import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Card from '../Card';

const CardCol = ({ children }) => (
  <Col xs={12} sm={6} md={4} lg={3}>
    {children}
  </Col>
);

export default () => (
  <Grid fluid>
    <Row>
      <CardCol>
        <Card />
      </CardCol>
      <CardCol>
        <Card />
      </CardCol>
      <CardCol>
        <Card />
      </CardCol>
      <CardCol>
        <Card />
      </CardCol>
      <CardCol>
        <Card />
      </CardCol>
      <CardCol>
        <Card />
      </CardCol>
      <CardCol>
        <Card />
      </CardCol>
      <CardCol>
        <Card />
      </CardCol>
      <CardCol>
        <Card />
      </CardCol>
      <CardCol>
        <Card />
      </CardCol>
      <CardCol>
        <Card />
      </CardCol>

    </Row>
  </Grid>
);
