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
  background-color: ${props => props.currentColor};
  border-radius: 50%;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
  &:hover,
  &:focus {
    outline: 0;
    background-color: ${props => props.currentColor};

  }
`;

export default (props) => {
  const switchers = props.colors.map(color => (
    <SwitchButton
      key={color.toString()}
      currentColor={color}
      onClick={() => props.handleChangeColor(color)}
    />
  ));
  return (
    <Wrapper>
      {switchers}
      {props.children}
    </Wrapper>
  );
};
