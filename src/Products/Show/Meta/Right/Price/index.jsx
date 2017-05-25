import React from 'react';
import styled from 'styled-components';

const Price = styled.span`
  font-size: 80px;
  font-weight: bold;
  color: #e2e2e2;
  margin-top: 1rem;
  line-height: 109px;
  text-align: right;
  align-self: flex-end;
`;

export default props => (
  <Price>
    {props.children}
  </Price>
);
