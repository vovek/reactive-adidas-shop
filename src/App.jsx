import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Sidebar from './Sidebar';
import Products from './Products/List';
import Product from './Products/Show';

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
        <Redirect from="/" to="/products/football/shoes" />
        <Route exact path="/products/:group/:type" component={Products} />
        <Route exact path="/products/:group/:type/:id" component={Product} />
      </Layout>
    </Router>
  );
}

export default App;
