import React from 'react';
import styled from 'styled-components';

import Meta from './Meta';
import Gallery from './Gallery';
import Description from './Description';
import BuyButton from './BuyButton';

const Wrapper = styled.div`
  position: relative;
  font-weight: bold;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  align-items: center;
  padding: 1rem;
`;

const colors = ['#c5c5c5', '#4d87ca', '#4a4a4a', '#3D9970', '#85144b'];

export default class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state = { colorIndex: 0 };
    this.handleChangeColor = this.handleChangeColor.bind(this);
  }

  handleChangeColor(colorIndex) {
    this.setState({ colorIndex });
  }

  render() {
    return (
      <Wrapper>
        <Meta
          color={colors[this.state.colorIndex]}
          colors={colors}
          handleChangeColor={this.handleChangeColor}
        />
        <Gallery />
        <Description>
          <span>Adidas</span>
          {' '}
          is a German multinational corporation, headquartered in Herzogenaurach, Germany,
          {' '}
          that designs and manufactures shoes, clothing and accessories.
        </Description>
        <BuyButton />
      </Wrapper>
    );
  }
}
