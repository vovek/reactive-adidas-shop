import React from 'react';
import styled from 'styled-components';

/*  import { MainMenu, SubMenu, Link } from './styled-components';*/
import Item, { Link } from './Item';


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
    <Item title="Football">
      <Link to="/" isSubLink href="">Shoes</Link>
      <Link to="/" isSubLink href="">Clothing</Link>
      <Link to="/" isSubLink href="">Accessories</Link>
    </Item>
    <Item title="Running">
      <Link to="/" isSubLink href="">Shoes</Link>
      <Link to="/" isSubLink href="">Clothing</Link>
      <Link to="/" isSubLink href="">Accessories</Link>
    </Item>
    <Item title="Basketball">
      <Link to="/" isSubLink href="">Shoes</Link>
      <Link to="/" isSubLink href="">Clothing</Link>
      <Link to="/" isSubLink href="">Accessories</Link>
    </Item>
  </Wrapper>
);
