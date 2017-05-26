import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  z-index: 9;
`;

const Title = styled.h1`
  font-size: 3rem;
  line-height: 3rem;
  margin: 0;
`;

const SaveButton = styled.button`
  color: #fff;
  background-color: ${props => props.currentColor};
  font-family: avenir-next;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.75rem;
  line-height: 1rem;
  width: 3rem;
  height: 3rem;
  margin-top: 0.5rem;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  outline: 0;
  &:focus {
    outline:0;
  }
`;

export default props => (
  <Wrapper className="test">
    <Title>Easy<br />Boost</Title>
    <SaveButton currentColor={props.currentColor}>Save</SaveButton>
  </Wrapper>
);
