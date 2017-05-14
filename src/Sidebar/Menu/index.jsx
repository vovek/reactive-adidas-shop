import React from 'react';

import { MainMenu, SubMenu, Link } from './styled-components';

export default () => (
  <MainMenu>
    <Link href="">Sports</Link>
    <SubMenu>
      <Link isSubLink href="">Shoes</Link>
      <Link isSubLink href="">Clothing</Link>
      <Link isSubLink href="">Accessories</Link>
    </SubMenu>
    <Link href="">Brands</Link>
    <Link href="">Micoach</Link>
  </MainMenu>
);
