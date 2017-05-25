import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SwitchButton = styled.button`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  margin-right: 18px;
  background-color: ${props => props.color};
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
  &:focus {
    outline: 0;
  }
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
