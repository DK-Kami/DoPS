import React from 'react';
import './styles/App.css';
import RouterLayer from './router';

import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <RouterLayer />
    </Container>
  );
}

export default App;
