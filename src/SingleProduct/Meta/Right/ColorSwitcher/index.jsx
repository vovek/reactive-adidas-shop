/* eslint-disable react/prop-types */

import React from 'react';
import styled from 'styled-components';

import SwitchButton from './styled';

const Wrapper = styled.div`
  display: flex;
`;

export default (props) => {
  const colors = props.colors;
  const switchers = colors.map((id, color) => (
    <SwitchButton key={id} color={color} />
  ));
  return (
    <Wrapper>
      {switchers}
    </Wrapper>
  );
};
