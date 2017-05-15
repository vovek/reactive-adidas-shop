import React from 'react';
import styled from 'styled-components';

import thumb from './product-thumb1.jpg';
import { Thumbnail, Separator, SeeMore } from './styled';

const Wrapper = styled.div`
  display: flex;
  width: 80%;
  min-height: 5rem;
  justify-content: space-around;
  align-items: center;
`;

export default () => (
  <Wrapper>
    <Thumbnail src={thumb} />
    <Thumbnail src={thumb} />
    <Thumbnail src={thumb} />
    <Thumbnail src={thumb} />
    <Separator>
      <hr />
      <hr />
      <hr />
    </Separator>
    <SeeMore>See<br />more<br />photos</SeeMore>
  </Wrapper>
);
