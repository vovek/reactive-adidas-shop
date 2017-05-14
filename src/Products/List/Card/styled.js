import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
`;

export const Price = styled.a`
  color: #000;
  font-size: 1.25rem;
  font-weight: bold;
  background: #fff;
  margin-top: 0.5rem;
  ${props => (props.onSale ? `
    background: linear-gradient(107deg, #0c09bf, #966dd8);
    color: #fff;
  ` : `
    background-color: #fff;
    color: #000;
  `)};
  width: 100%;
  display: block;
  text-align: center;
  padding: 1em 0;
  &.sale-price {
    background: linear-gradient(107deg, #0c09bf, #966dd8);
    color: #fff;
}
`;
