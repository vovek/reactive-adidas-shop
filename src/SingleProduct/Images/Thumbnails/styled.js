import styled from 'styled-components';

export const Thumbnail = styled.img`
  cursor: pointer;
  height: 100%;
  width: auto;
`;

export const Separator = styled.div`
  overflow: hidden;
  > hr {
    width: 150px;
    border: 0;
    height: 3px;
    background-color: #c0c0c0;
    margin: 0.3rem
  }
`;

export const SeeMore = styled.a`
  font-size: 0.5rem;
  line-height: 1.5;
  color: #c0c0c0;
`;
