/* eslint-disable react/prop-types */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`;

const Thumbnail = styled.img`
  cursor: pointer;
  max-height: 5rem;
  width: auto;
  margin-right: 1rem;
  border: 2px solid #e5e5e5;
  &:last-child {
    margin-right: 0;
  }
`;

export default props => (
  <Wrapper>
    {props.images.map((image, index) => (
      <Thumbnail
        key={image}
        src={image}
        onClick={() => props.handleChangeImage(index)}
      />
    ))}
  </Wrapper>
);
