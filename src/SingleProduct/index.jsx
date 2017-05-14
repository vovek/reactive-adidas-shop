import React from 'react';
import styled from 'styled-components';

import {
  MetaLeft,
  ProductName,
  SaveButton,
  MetaRight,
  ColorSwitcher,
  SwitchButton,
  ProductPrice,
  ProductInfo,
  ProductImages,
  ProductThumbnails,
  Thumbnail,
  ThumbnailsSeparator,
  Separator,
  MoreImagesLink,
  ProductDescription,
  BuyButton,
} from './styled';
import productImage from './big-image.jpg';
import thumbImage1 from './product-thumb1.jpg';

const Wrapper = styled.div`
  position: relative;
  font-weight: bold;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  flex: 2 100%;
`;
export default () => (
  <Wrapper>
    <MetaLeft>
      <ProductName>Ultra<br />Boost</ProductName>
      <SaveButton>Save</SaveButton>
    </MetaLeft>
    <MetaRight>
      <ColorSwitcher>
        <SwitchButton color="grey" />
        <SwitchButton color="blue" />
        <SwitchButton color="black" />
        <SwitchButton color="yellow" />
      </ColorSwitcher>
      <ProductPrice>$170</ProductPrice>
    </MetaRight>

    <ProductInfo>
      <ProductImages>
        <img src={productImage} alt="" />
      </ProductImages>
      <ProductThumbnails>
        <Thumbnail>
          <img src={thumbImage1} alt="" />
        </Thumbnail>
        <Thumbnail>
          <img src={thumbImage1} alt="" />
        </Thumbnail>
        <Thumbnail>
          <img src={thumbImage1} alt="" />
        </Thumbnail>
        <Thumbnail>
          <img src={thumbImage1} alt="" />
        </Thumbnail>
        <ThumbnailsSeparator>
          <Separator />
          <Separator />
          <Separator />
        </ThumbnailsSeparator>
        <MoreImagesLink link="/">
          see<br />
          more<br />
          photos<br />
        </MoreImagesLink>
      </ProductThumbnails>

    </ProductInfo>
    <ProductDescription>
      <p>
        <span>Adidas</span>
        {' '}
        is a German multinational corporation, headquartered in Herzogenaurach, Germany, that designs and manufactures shoes, clothing and accessories.
      </p>
      <BuyButton>Buy now</BuyButton>
    </ProductDescription>
  </Wrapper>
);
