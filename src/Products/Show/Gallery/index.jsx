import React from 'react';
import styled from 'styled-components';

import Thumbnails from './Thumbnails';
import img from './big-image.jpg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;

const MainImage = styled.img`
  width: 80%;
  height: auto;
`;

export default () => (
  <Wrapper>
    <MainImage src={img} />
    <Thumbnails />
  </Wrapper>
);
