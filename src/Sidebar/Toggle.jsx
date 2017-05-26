import React from 'react';
import styled from 'styled-components';

import img from './toggle.svg';

const Icon = styled.img`
  cursor: pointer;
  position: absolute;
  right: 1rem;
  top: 0.75rem;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export default ({ handleToggleMenu }) => <Icon onClick={handleToggleMenu} src={img} />;
