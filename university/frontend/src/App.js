import React from 'react';
import { render } from 'react-dom';

const app = document.getElementById('app');

function App() {
  return <h1>Hola, mundo</h1>;
}

render(<App />, app);
