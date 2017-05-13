import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

const Logo = styled.img`
  height: 100%;

  @media only screen and (min-width: 764px) {
    height: 3rem;
  }
`;

export default () => (
  <a href="#" alt="Adidas">
    <Logo src={logo} />
  </a>
);
