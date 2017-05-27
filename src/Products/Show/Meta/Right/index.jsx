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

export default ({ color, colors, handleChangeColor }) => (
  <Wrapper>
    <ColorSwitcher colors={colors} handleChangeColor={handleChangeColor}>
      <Label><SaleLabel /></Label>
    </ColorSwitcher>
    <Price color={color}>$170</Price>
  </Wrapper>
);
