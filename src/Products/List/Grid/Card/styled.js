import styled from 'styled-components';
import { LabelLayout } from '../../../../components/SaleLabel';

export const Image = styled.img`
  width: 100%;
`;

export const Price = styled.span`
  color: #fff;
  font-size: 1.25rem;
  font-weight: bold;
  background: #fff;
  margin-top: 0.5rem;
  width: 100%;
  line-height: 91px;
  text-align: center;
  background: ${props => (props.isSale ? 'linear-gradient(107deg, #0c09bf, #966dd8)' : '#fff')};
  `;

export const Label = styled(LabelLayout)`
  width: auto;
  position: absolute;
  top: 18px;
  right: 18px;
  padding: 0 1rem;
  `;
