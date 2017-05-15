import React from 'react';
import styled from 'styled-components';

import ColorSwitcher from './ColorSwitcher';
import Price from './Price';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 9;
`;

export default () => (
  <Wrapper>
    <ColorSwitcher />
    <Price>$170</Price>
  </Wrapper>
);
