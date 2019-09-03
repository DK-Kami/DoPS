import React from 'react';
import './styles/App.css';
import RouterLayer from './router';

import Container from '@material-ui/core/Container';

function App() {
  return (
    <Container class="App">
      <RouterLayer />
    </Container>
  );
}

export default App;
