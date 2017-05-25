import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.p`
  font-size: 33px;
  line-height: 1.5;
  margin-top: 5rem;
  margin-bottom: 5rem;
  text-transform: none;
  font-weight: normal;
  color: #d8d8d8;
  & > span {
    color: #6e6e6e;
  }
`;

export default props => <Wrapper>{props.children}</Wrapper>;
