import React from 'react';
import styled from 'styled-components';

import Filters from './Filters';
import List from './List';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default () => (
  <Wrapper>
    <Filters />
    <List />
  </Wrapper>
);
