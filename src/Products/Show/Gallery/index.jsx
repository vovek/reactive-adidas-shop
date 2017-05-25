/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

import React from 'react';
import styled from 'styled-components';

import Thumbnails from './Thumbs';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const MainImage = styled.img` 
  height: auto;
`;

const images = [
  { id: 0, src: './one.jpg' },
  { id: 1, src: './two.jpg' },
  { id: 2, src: './three.jpg' },
  { id: 3, src: './four.jpg' },
  { id: 4, src: './five.jpg' },
];

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentIndex: 0 };
    this.changeImage = this.changeImage.bind(this);
  }

  changeImage(currentIndex) {
    this.setState({ currentIndex });
  }
  render() {
    return (
      <Wrapper>
        <MainImage src={require(images[this.state.currentIndex].src)} />
        <Thumbnails
          data={images}
          changeImage={this.changeImage}
          currentIndex={this.state.currentIndex}
        />
      </Wrapper>
    );
  }
}
