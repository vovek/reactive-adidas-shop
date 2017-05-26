import React from 'react';
import styled from 'styled-components';

import Filters from './Filters';
import Grid from './Grid';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex: 4;
`;

export default () => (
  <Wrapper>
    <Filters />
    <Grid />
  </Wrapper>
);
