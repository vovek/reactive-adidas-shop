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
  flex: 2 100%;
  align-items: center;
  padding: 1rem;
`;

const colors = ['#c5c5c5', '#4d87ca', '#4a4a4a', '#3D9970', '#85144b'];

export default class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentColor: colors[0] };
    this.handleChangeColor = this.handleChangeColor.bind(this);
  }

  handleChangeColor(currentColor) {
    this.setState({ currentColor });
  }

  render() {
    return (
      <Wrapper>
        <Meta
          colors={colors}
          currentColor={this.state.currentColor}
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
