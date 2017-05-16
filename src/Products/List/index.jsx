import React from 'react';
import styled from 'styled-components';

import Filters from './Filters';
import Grid from './Grid';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default () => (
  <Wrapper>
    <Filters />
    <Grid />
  </Wrapper>
);
