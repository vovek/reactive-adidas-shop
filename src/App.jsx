import React, { Component } from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media only screen and (min-width: 764px) {
    flex-direction: row;
  }
`;

class App extends Component {
  render() {
    return <Layout />;
  }
}

export default App;
