import React from 'react';
import styled from 'styled-components';

const Price = styled.span`
  font-size: 80px;
  font-weight: bold;
  color: #e2e2e2;
  margin: 0;
  line-height: 109px;
  text-align: right;
  align-self: flex-start;
`;

export default props => (
  <Price>
    {props.children}
  </Price>
);
