import React from 'react';
import styled from 'styled-components';

import { Title, SaveButton } from './styled';

const Wrapper = styled.div`
  z-index: 9;
`;

export default () => (
  <Wrapper>
    <Title>Easy<br />Boost</Title>
    <SaveButton>Save</SaveButton>
  </Wrapper>
);
