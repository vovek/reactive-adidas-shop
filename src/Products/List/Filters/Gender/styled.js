import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (min-width: 768px) {
    margin-right: 2rem;
  }
`;

export const Icon = styled.img`
  display: none;
  width: 55px;
  height: 55px;
  padding: 0.5em 0.3em;

  @media only screen and (min-width: 768px) {
    display: inline-block;
    margin-right: 30px;
    background: #ebebeb;
}
`;
