import styled from 'styled-components';

export const Form = styled.form`
  display: none;
  
  @media only screen and (min-width: 768px) {
    display: block;
    margin-top: 1.5rem;
  }
`;

export const Input = styled.input`
  display: none;
  width: 100%;
  color: #3a3a3a;
  background: transparent;
  border: 0;
  border-bottom: 4px solid #373737;
  text-transform: uppercase;
  font-size: 1rem;
  padding-left: 2em;
  padding-bottom: 5px;
  @media only screen and (min-width: 768px) {
    display: block;
  }
`;

export const Icon = styled.img`
  position: absolute;
  display: none;
  @media only screen and (min-width: 768px) {
    display: block;
  }
`;
