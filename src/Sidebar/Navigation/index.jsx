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

const LinkWithActive = ({ to, children }) => (
  <Link activeClassName="active" to={to}>{children}</Link>
);

export default props => (
  <Wrapper isOpened={props.isOpened}>
    <Menu title="Football">
      <LinkWithActive to="/products/football/shoes">Shoes</LinkWithActive>
      <LinkWithActive to="/products/football/clothing">Clothing</LinkWithActive>
      <LinkWithActive to="/products/football/accessorises">Accessories</LinkWithActive>
    </Menu>
    <Menu title="Running">
      <Link to="/products/running/shoes" activeClassName="selected">Shoes</Link>
      <Link to="/products/running/clothing" activeClassName="selected">Clothing</Link>
      <Link to="/products/running/accessories" activeClassName="selected">Accessories</Link>
    </Menu>
    <Menu title="Basketball">
      <Link to="/products/basketball/shoes" activeClassName="selected">Shoes</Link>
      <Link to="/products/basketball/clothing" activeClassName="selected">Clothing</Link>
      <Link to="/products/basketball/accessories" activeClassName="selected">Accessories</Link>
    </Menu>
  </Wrapper>
);
