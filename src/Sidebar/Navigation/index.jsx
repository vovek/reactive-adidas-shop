import React from 'react';
import styled from 'styled-components';

import Menu, { Link } from './Menu';

export const Wrapper = styled.nav`
  display: ${props => (props.isOpened ? 'block' : 'none')};
  flex-direction: column;
  margin-top: 6em;
  width:100%;
  text-align: center;
  text-transform: uppercase;
  @media only screen and (min-width: 768px) {
    display: flex;
  }
`;

export default props => (
  <Wrapper isOpened={props.isOpened}>
    <Menu title="Football">
      <Link to="/">Shoes</Link>
      <Link to="/">Clothing</Link>
      <Link to="/">Accessories</Link>
    </Menu>
    <Menu title="Running">
      <Link to="/">Shoes</Link>
      <Link to="/">Clothing</Link>
      <Link to="/">Accessories</Link>
    </Menu>
    <Menu title="Basketball">
      <Link to="/">Shoes</Link>
      <Link to="/">Clothing</Link>
      <Link to="/">Accessories</Link>
    </Menu>
  </Wrapper>
);
