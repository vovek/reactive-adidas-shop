import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logo from './logo.svg';

const Logo = styled.img`
  height: 1.5rem;

  @media only screen and (min-width: 768px) {
    height: 3rem;
  }
`;

export default () => (
  <Link to="/">
    <Logo src={logo} />
  </Link>
);
