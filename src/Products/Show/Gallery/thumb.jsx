import React from 'react';
import styled from 'styled-components';

import thumb from './product-thumb1.jpg';

const Wrapper = styled.div`
  display: flex;
  width: 80%;
  min-height: 5rem;
  margin-right: 15px;
  justify-content: flex-start;
  align-items: center;
`;

const Thumbnail = styled.img`
  cursor: pointer;
  height: 100%;
  width: auto;
`;

export default () => (
  <Wrapper>
    <Thumbnail src={thumb} />
    <Thumbnail src={thumb} />
    <Thumbnail src={thumb} />
    <Thumbnail src={thumb} />
  </Wrapper>
);
