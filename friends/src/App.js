import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './components/Login';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <AppContainer>
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Home} />
        </AppContainer>
      </Router>
    );
  }
}

export default App;
