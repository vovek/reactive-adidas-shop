import React from 'react';
import styled from 'styled-components';

const Price = styled.span`
  font-size: 80px;
  font-weight: bold;
  color: ${props => props.color};
  margin-top: 1rem;
  line-height: 109px;
  text-align: right;
  align-self: flex-end;
`;

export default ({ color, children }) => (
  <Price color={color}>
    {children}
  </Price>
);
