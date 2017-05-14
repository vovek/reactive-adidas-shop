import React from 'react';
import styled from 'styled-components';

import { Image, Price } from './styled';
import productImage from './shoes.jpg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 1rem;
  align-items: stretch;
  background-color: #f4f4f4;
  padding: 9px;
  margin-bottom: 1em;
  position: relative;
`;

export default () => (
  <Wrapper>
    <Image src={productImage} />
    <Price href="/" onSale>$170</Price>
  </Wrapper>
);
