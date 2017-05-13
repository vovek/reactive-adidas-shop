import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

const Logo = styled.img`
  height: 100%;

  @media only screen and (min-width: 768px) {
    height: 3rem;
  }
`;

export default () => <Logo src={logo} />;
