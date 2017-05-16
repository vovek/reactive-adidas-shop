import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Products from './Products/List';
import SingleProduct from './Products/Show';

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
    <Router>
      <Layout>
        <Sidebar />
        <Route exact path="/" component={Products} />
        <Route path="/item" component={SingleProduct} />
      </Layout>
    </Router>
  );
}

export default App;
