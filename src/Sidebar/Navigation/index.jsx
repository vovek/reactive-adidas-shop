import React from 'react';
import styled from 'styled-components';

/*  import { MainMenu, SubMenu, Link } from './styled-components';*/
import Menu, { Link } from './Menu';

export const Wrapper = styled.nav`
  display: none;
  flex-direction: column;
  margin-top: 6em;
  text-align: center;
  text-transform: uppercase;
  @media only screen and (min-width: 768px) {
    display: flex;
  }
`;

export default () => (
  <Wrapper>
    <Menu title="Football">
      <Link to="/" isSubLink href="">Shoes</Link>
      <Link to="/" isSubLink href="">Clothing</Link>
      <Link to="/" isSubLink href="">Accessories</Link>
    </Menu>
    <Menu title="Running">
      <Link to="/" isSubLink href="">Shoes</Link>
      <Link to="/" isSubLink href="">Clothing</Link>
      <Link to="/" isSubLink href="">Accessories</Link>
    </Menu>
    <Menu title="Basketball">
      <Link to="/" isSubLink href="">Shoes</Link>
      <Link to="/" isSubLink href="">Clothing</Link>
      <Link to="/" isSubLink href="">Accessories</Link>
    </Menu>
  </Wrapper>
);
