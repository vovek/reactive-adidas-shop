import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SwitchButton = styled.button`
  width: 18px;
  height: 18px;
  padding: 0;
  border-radius: 50%;
  border: 0;
  margin-right: 18px;
  box-sizing: content-box;
  background-color: ${props => props.color};
  border-radius: 50%;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
  &:hover,
  &:focus {
    outline: 0;
    background-color: ${props => props.color};

  }
`;

export default ({ colors, handleChangeColor, children }) => (
  <Wrapper>
    {colors.map((color, index) => (
      <SwitchButton key={color} color={colors[index]} onClick={() => handleChangeColor(index)} />
    ))}
    {children}
  </Wrapper>
);
