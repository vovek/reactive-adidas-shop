import React from 'react';
import styled from 'styled-components';

import Sidebar from './Sidebar';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  font-family: avenir-next;

  @media only screen and (min-width: 764px) {
    flex-direction: row;
  }
`;

function App() {
  return (
    <Layout>
      <Sidebar />
    </Layout>
  );
}

export default App;
