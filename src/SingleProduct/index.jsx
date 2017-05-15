import React from 'react';
import styled from 'styled-components';

import Meta from './Meta';
import Images from './Images';
import Description from './Description';
import BuyButton from './BuyButton';

const Wrapper = styled.div`
  position: relative;
  font-weight: bold;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  flex: 2 100%;
  align-items: center;
  padding: 1rem;
`;
export default () => (
  <Wrapper>
    <Meta />
    <Images />
    <Description>
      <span>Adidas</span>
      {' '}
      is a German multinational corporation, headquartered in Herzogenaurach, Germany, that designs and manufactures shoes, clothing and accessories.
    </Description>
    <BuyButton />
  </Wrapper>
);
