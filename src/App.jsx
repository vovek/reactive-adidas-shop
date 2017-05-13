import React, { Component } from 'react';
import styled from 'styled-components';

import 'normalize.css';
import './assets/css/fonts.css';
import './assets/css/style.css';

import Sidebar from './Sidebar';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  font-family: avenir;

  @media only screen and (min-width: 764px) {
    flex-direction: row;
  }
`;

class App extends Component {
  render() {
    return (
      <Layout>
        <Sidebar />
      </Layout>
    );
  }
}

export default App;