import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 3rem;
  line-height: 3rem;
  margin: 0;
`;

export const SaveButton = styled.button`
  color: #fff;
  font-family: avenir-next;
  font-weight: bold;
  text-transform: uppercase;
  background: #e3e3e3;
  font-size: 18px;
  line-height: 25px;
  width: 75px;
  height: 75px;
  margin-top: 14px;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  outline: 0;
  &:focus {
    outline:0;
  }
`;
