import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media only screen and (min-width: 768px) {
    margin-right: 2rem;
  }
`;

export const GenderFilter = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (min-width: 768px) {
    margin-right: 2rem;
  }
`;

export const SizeFilter = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  color: ${props => (props.isActive ? '#4d42f8' : '#d6d6d6')};
  background: transparent;
  margin-right: 0.5em;
  text-transform: uppercase;
  font-weight: bold;
  padding: 0;
  &:focus {
    outline: 0;
  }
  &:hover {
    color: #4d42f8;
  }
`;

export const Icon = styled.img`
  display: none;
  width: 2.25em;
  height: 2.292em;
  padding: 0.458em 0.292em;

  @media only screen and (min-width: 768px) {
    display: inline-block;
    margin-right: 30px;
    background: #ebebeb;
}
`;

export const Label = styled.span`
  text-transform: uppercase;
  margin-right: 1em;
  color: #4d42f8;
  font-weight: bold;
`;
