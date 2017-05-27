import React from 'react';
import styled from 'styled-components';

import Left from './Left';
import Right from './Right';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 1rem;
  left: 1rem;
  right: 1rem;
`;

export default ({ color, colors, colorIndex, handleChangeColor }) => (
  <Wrapper>
    <Left color={color} />
    <Right
      colorIndex={colorIndex}
      colors={colors}
      handleChangeColor={handleChangeColor}
      color={color}
    />
  </Wrapper>
);
