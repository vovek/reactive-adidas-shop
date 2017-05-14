import styled from 'styled-components';

export const MetaLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  position: absolute;
  left: 0;
  top: 0;
  padding-left: 26px;
  padding-top: 31px;
  z-index: 9;
`;

export const ProductName = styled.h1`
  font-size: 3rem;
  line-height: 1;
  margin: 0;
`;

export const SaveButton = styled.button`
  color: #fff;
  text-transform: uppercase
  font-weight: bold;
  background: #e3e3e3;
  font-size: 0.75rem;
  width: 3rem;
  height: 3rem;
  margin-top: 0.5rem;
  border-radius: 50%;
`;

export const MetaRight = styled.div`
  flex-direction: column;
  position: absolute;
  right: 0;
  top: 0;
  padding-top: 31px;
  padding-right: 26px;
  z-index: 9;
`;

export const ColorSwitcher = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: flex-end;
  align-items: center;
  padding: 9px 0;
`;

export const SwitchButton = styled.button`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  margin-right: 18px;
  background-color: ${props => props.color};
  &:last-child {
    margin-right: 0;
  }
  & :focus {
    outline: 0;
  }
`;

export const ProductPrice = styled.span`
  font-size: 80px;
  font-weight: bold;
  color: #e2e2e2;
  margin: 0;
  margin-top: 11px;
  line-height: 109px;
  text-align: right;
  align-self: flex-start;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  flex: 0 0 100%;
`;

export const ProductImages = styled.div`
  text-align: center;
  flex: 2 0 auto;
  flex-flow: row;
  flex-wrap: nowrap;
  margin-top: 51px;
  margin-left: 77px;
  & img {
    width: 100%;
  }
`;

export const ProductThumbnails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
`;

export const Thumbnail = styled.button`
  outline: 0;
  background: #fff;
  margin-right: 1rem;
  & :focus {
    outline: 0;
  }
`;

export const ThumbnailsSeparator = styled.div`
  margin: 0 38px;
`;

export const Separator = styled.div`
  width: 159px;
  height: 3px;
  background: #e7e7e7;
  margin-bottom: 3px;
`;

export const MoreImagesLink = styled.a`
  color: #c0c0c0;
  font-family: avenir-next;
  font-size: 14px;
  text-align: left;
  font-weight: 500;
  outline: 0;
`;

export const ProductDescription = styled.div`
  display: flex;
  font-family: avenir-next;
  font-size: 33px;
  font-weight: normal;
  color: #d8d8d8;
  text-align: left;
  margin: 34px 64px 176px 34px;
  & span {
    color: #6e6e6e;
  }
`;

export const BuyButton = styled.button`
  position: fixed;
  bottom: 0;
  left:0;
  margin-left: 324px;
  width: calc(100% - 324px);
  text-align: center;
  background: linear-gradient(to right, #4949aa, #27275d);
  font-size: 32px;
  color: #fff;
  line-height: 44px;
  height: 115px;
  font-family: avenir-next;
  font-weight: bold;
  
  @media only screen and (min-width: 992px) {
    margin-left: 414px;
    width: calc(100% - 414px);
  }
`;
