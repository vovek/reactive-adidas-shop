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
  width: 2.25em;
  height: 2.292em;
  padding: 0.458em 0.292em;

  @media only screen and (min-width: 768px) {
    display: inline-block;
    margin-right: 30px;
    background: #ebebeb;
}
`;
