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
  ${props => props.isSelected && 'outline: 5px solid #e8e8ea;'}
  &:hover {
    outline: 5px solid #e8e8ea;
  }
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
        isSelected={props.currentIndex === index}
        onClick={() => props.handleChangeImage(index)}
      />
    ))}
  </Wrapper>
);
