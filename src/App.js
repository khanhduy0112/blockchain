import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './Main';

function App() {

  return (
    <BrowserRouter basename={window.location.pathname || ''}>
      <Route exact path="/" component={Main} />
    </BrowserRouter>
  );
}

export default App;
