import React, { Component } from 'react';
import styled from 'styled-components';

import Login from './components/Login';
import Home from './components/Home';

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
      <AppContainer>
        <Login />
        <Home />
      </AppContainer>
    );
  }
}

export default App;
