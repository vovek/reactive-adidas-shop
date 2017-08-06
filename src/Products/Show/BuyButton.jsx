import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  position: fixed;
  bottom: 0;
  left:0;
  right: 0;
  text-align: center;
  text-transform: uppercase;
  background: linear-gradient(to right, #4949aa, #27275d);
  font-size: 32px;
  color: #fff;
  line-height: 44px;
  height: 115px;
  font-family: avenir-next;
  font-weight: bold;
  border: 0;
  cursor: pointer;
  width: 100%;

  @media only screen and (min-width: 768px) {
    margin-left: 327px;
    width: calc(100% - 327px);
  }

  @media only screen and (min-width: 1200px) {
    margin-left: 414px;
    width: calc(100% - 414px);
  }
`;

export default () => <Button>Buy Now</Button>;
