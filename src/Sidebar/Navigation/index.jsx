import React from 'react';
import styled from 'styled-components';

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
      <Link to="/products/football/shoes" activeClassName="selected">Shoes</Link>
      <Link to="/products/football/clothing" activeClassName="selected">Clothing</Link>
      <Link to="/products/football/accessorises" activeClassName="selected">Accessories</Link>
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
