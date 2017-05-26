import React from 'react';
import styled from 'styled-components';

import SaleLabel, { LabelLayout } from '../../../../components/SaleLabel';
import ColorSwitcher from './ColorSwitcher';
import Price from './Price';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 9;
`;

const Label = styled(LabelLayout)`
  margin-left: 2rem;
  padding: 0 1rem;
`;

export default props => (
  <Wrapper>
    <ColorSwitcher
      colors={props.colors}
      currentColor={props.currentColor}
      handleChangeColor={props.handleChangeColor}
    >
      <Label><SaleLabel /></Label>
    </ColorSwitcher>
    <Price currentColor={props.currentColor}>$170</Price>
  </Wrapper>
);
