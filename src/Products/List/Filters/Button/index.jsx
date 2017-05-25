import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  color: ${props => (props.isActive ? '#4d42f8' : '#d6d6d6')};
  background: transparent;
  margin-right: 0.5em;
  text-transform: uppercase;
  font-weight: bold;
  padding: 0;
  font-family: avenir-next;
  font-size: 1rem;
  line-height: 1.5rem;
  border: 0;
  cursor: pointer;
  &:focus {
    outline: 0;
  }
  &:hover {
    color: #4d42f8;
  }
`;

export default props => <Button>{props.children}</Button>;
