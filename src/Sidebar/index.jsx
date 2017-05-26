import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import SearchForm from './SearchForm';
import Nav from './Navigation';
import Toggle from './Toggle';

const Wrapper = styled.aside`
  z-index: 2;
  display: flex;
  background-color: #0e0e0e;
  flex-direction: column;
  align-items: flex-start;
  height: 100vh;
  padding: 0.75rem 1rem;
  background-color: #0e0e0e;
  ${props => (props.isToggled ? 'height: 100vh' : 'height: 3rem')};

  @media only screen and (min-width: 768px) {
    align-items: center;
    justify-content: flex-start;
    min-width: 300px;
    padding: 1.5rem 1rem;
    height: auto;
  }

  @media only screen and (min-width: 1200px) {
    
  }
  
`;

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggled: false };
    this.handleToggleMenu = this.handleToggleMenu.bind(this);
  }

  handleToggleMenu() {
    this.setState(prevState => ({ isToggled: !prevState.isToggled }));
  }

  render() {
    return (
      <Wrapper isToggled={this.state.isToggled}>
        <Logo />
        <Toggle handleToggleMenu={this.handleToggleMenu} />
        <SearchForm />
        <Nav isToggled={this.state.isToggled} />
      </Wrapper>
    );
  }
}
