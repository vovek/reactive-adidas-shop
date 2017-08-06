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
  width: 80%;
  height: auto;
  margin: 0 auto;
`;

const images = [
  require('./one.jpg'),
  require('./two.jpg'),
  require('./three.jpg'),
  require('./four.jpg'),
];

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentIndex: 0 };
    this.handleChangeImage = this.handleChangeImage.bind(this);
  }

  handleChangeImage(currentIndex) {
    this.setState({ currentIndex });
  }
  render() {
    return (
      <Wrapper>
        <MainImage src={images[this.state.currentIndex]} />
        <Thumbnails
          images={images}
          handleChangeImage={this.handleChangeImage}
          currentIndex={this.state.currentIndex}
        />
      </Wrapper>
    );
  }
}
