import styled from 'styled-components';

const SwitchButton = styled.button`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  margin-right: 18px;
  background-color: ${props => props.color};
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
  &:focus {
    outline: 0;
  }
`;

export default SwitchButton;
