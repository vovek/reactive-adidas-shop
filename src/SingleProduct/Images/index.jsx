import React from 'react';
import styled from 'styled-components';

import Thumbnails from './Thumbnails';
import { MainImage } from './styled';
import img from './big-image.jpg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;

export default () => (
  <Wrapper>
    <MainImage src={img} />
    <Thumbnails />
  </Wrapper>
);
