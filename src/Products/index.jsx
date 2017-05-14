import React from 'react';
import styled from 'styled-components';

import Filter from './Filter';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default () => (
  <Wrapper>
    <Filter />
  </Wrapper>
);
