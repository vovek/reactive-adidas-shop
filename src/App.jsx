import React from 'react';
import styled from 'styled-components';

import Sidebar from './Sidebar';
import Products from './Products';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  font-family: avenir-next;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

function App() {
  return (
    <Layout>
      <Sidebar />
      <Products />
    </Layout>
  );
}

export default App;
