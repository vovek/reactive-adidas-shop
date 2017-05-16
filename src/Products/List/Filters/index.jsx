import React from 'react';
import styled from 'styled-components';

import Gender from './Gender';
import Size from './Size';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  font-weight: bold;
  padding: 0.3em 1rem;
  border-bottom: 3px solid #e7e7e7;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export default () => (
  <Wrapper>
    <Gender />
    <Size />
  </Wrapper>
);
