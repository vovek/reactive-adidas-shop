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
  color: #303030;
  outline: 0;
  padding: 0.3em 0;
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
