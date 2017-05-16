import styled from 'styled-components';

export const MainMenu = styled.nav`
  display: none;
  flex-direction: column;
  align-items: center;
  margin-top: 6em;
  text-transform: uppercase;
  @media only screen and (min-width: 768px) {
    display: flex;
  }
`;

export const Link = styled.a`
  font-weight: ${props => (props.isSubLink ? 'normal' : 'bold')};
  font-family: ${props => (props.isSubLink ? 'andale-mono' : 'avenir-next')};
  color: ${props => (props.isActive ? '#fff' : '#3c3c3c')};
  outline: 0;
  padding: 0.3em 0;
  ${props => props.isActive && `
    position: relative;
    padding-right: 20px;
    color: #fff;
    &:after {
      content: '';
      position: absolute;
      top: 18px;
      right: 0;
      width: 10px;
      height: 10px;
      border: 3px solid #fff;
      border-left: none;
      border-top: none;
      border-radius: 3px;
      transform: rotate(45deg);
      transition-duration: .2s;
  `};
  &:hover,
  &:focus
  {
      color: #fff;
  }

`;

export const SubMenu = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2em;
`;
