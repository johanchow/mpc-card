import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { IdentityRefresher } from 'official-common';
import './app.scss';
import router from './router';

function App() {
  return (
    <div className="onlycoin-app">
      <RouterProvider router={router} />
      <IdentityRefresher />
    </div>
  );
}

export default App;
