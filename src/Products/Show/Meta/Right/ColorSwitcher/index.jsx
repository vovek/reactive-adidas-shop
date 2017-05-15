/* eslint-disable react/prop-types */

import React from 'react';
import styled from 'styled-components';

import SwitchButton from './styled';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export default ({ colors, children }) => {
  const switchers = colors.map(color => (
    <SwitchButton key={color.toString()} color={color} />
  ));
  return (
    <Wrapper>
      {switchers}
      {children}
    </Wrapper>
  );
};
