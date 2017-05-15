import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LabelLayout } from '../../../components/SaleLabel';

export const Image = styled.img`
  width: 100%;
`;

export const Price = styled(Link)`
  color: #fff;
  font-size: 1.25rem;
  font-weight: bold;
  background: #fff;
  margin-top: 0.5rem;
  width: 100%;
  display: block;
  text-align: center;
  padding: 1em 0;
  background: ${props => (props.isSale ? 'linear-gradient(107deg, #0c09bf, #966dd8)' : '#fff')};
  `;

export const Label = styled(LabelLayout)`
  width: auto;
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 0 1rem;
  `;
