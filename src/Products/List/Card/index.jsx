/* eslint-disable react/prop-types */

import React from 'react';
import styled from 'styled-components';

import SaleLabel from '../../../components/SaleLabel';
import productImage from './shoes.jpg';
import { Image, Price } from './styled';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 1rem;
  align-items: stretch;
  background-color: #f4f4f4;
  padding: 9px;
  margin-bottom: 1em;
  position: relative;
  > span {
    width: auto
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;

export default props => (
  <Wrapper>
    {props.onSale && <SaleLabel />}
    <Image src={productImage} />
    <Price to="/item" onSale>$170</Price>
  </Wrapper>
);
