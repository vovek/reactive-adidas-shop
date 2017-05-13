import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';

const Wrapper = styled.aside`
  width: 100%;
  height: 3rem;
  padding: 0.5rem 1rem;
  background-color: #0e0e0e;
  

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 0 0 327px;
    height: 100vh;
    padding: 1.5rem 1rem;
  }

  @media only screen and (min-width: 992px) {
    flex: 0 0 414px;
  }
`;

export default () => (
  <Wrapper>
    <Logo />
  </Wrapper>
);